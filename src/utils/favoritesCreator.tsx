import { MovieCard } from "../components/MovieCard/MovieCard";
import { initialState } from "../redux/state";

export const FavoritesCreator = (): any => (
  <>
    {initialState.map(({name, year, genre, image}) => <MovieCard name={name}  year={year} genre={genre} image={image}/>)}
  </>
);