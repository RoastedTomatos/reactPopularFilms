import { connect } from "react-redux";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { favoriteFilms } from "../redux/reducers";
import { initialState } from "../redux/state";

export const FavoritesCreator = (): any => (
  <>
    {favoriteFilms.map(({id, name, year, genre, image}: any) => <MovieCard name={name}  year={year} genre={genre} image={image} id={id}/>)}
  </>
);

const favoritesState = (state: any) => {
  console.log(state)
  return state;
}

export default connect(favoritesState, null)(FavoritesCreator)