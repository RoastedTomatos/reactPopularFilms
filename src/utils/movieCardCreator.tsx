//import moviesArray from "../stuff/movies";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { getFetched } from "../redux/selectors";
import { fetchFilms } from "../redux/actions";

export const MovieCardMaker = (): any => {
  const dispatch = useDispatch();
  const fetchedFilms = useSelector(getFetched);
  
  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <>
      {
        //@ts-ignore
        fetchedFilms.map(
          ({original_title, release_date, poster_path}: any) => 
            <MovieCard 
              name={original_title}
              year={release_date}
              image={"https://image.tmdb.org/t/p/w500/" + poster_path}
            />
        )
      }
    </>
  )
}