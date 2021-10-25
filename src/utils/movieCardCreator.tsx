import moviesArray from "../stuff/movies";
import { MovieCard } from "../components/MovieCard/MovieCard";

export const MovieCardMaker = (): any => (
  <>
    {moviesArray.map(({ name, year, genre, image }) => <MovieCard name={name}  year={year} genre={genre} image={image}/>)}
  </>
); 