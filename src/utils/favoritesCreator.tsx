import { connect, useSelector } from "react-redux";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { getFavorites } from "../redux/selectors";

export const FavoritesCreator = (): any => {
  const favorites = useSelector(getFavorites);
  return (
    <>
      {
        //@ts-ignore
        favorites.map(
          ({id, name, year, genre, image}: any) => 
          <MovieCard 
            name={name}  
            year={year} 
            genre={genre} 
            image={image} 
            id={id}
          />
        )
      }
    </>
  );
};

const mapStateToProps = (state: any) => {
  return state;
}

export default connect(mapStateToProps, null)(FavoritesCreator)
