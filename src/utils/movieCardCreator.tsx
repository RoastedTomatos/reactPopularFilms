//import moviesArray from "../stuff/movies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { fetchedFilms } from "../redux/reducers";
import { store } from "../store";

export const MovieCardMaker = (): any => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type:"GET_MOVIES"})
  });

  console.log(fetchedFilms);
  return (
    <>
      {/* {{store.fetchedFilms.map(({original_title, release_date, poster_path}: any) => <MovieCard name={original_title} year={release_date} image={poster_path} />)}} */}
    </>
  )
}