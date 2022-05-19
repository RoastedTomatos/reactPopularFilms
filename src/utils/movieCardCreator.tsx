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
      {fetchedFilms.map(({ title, release_date, poster_path }: any) => (
        <MovieCard
          name={title}
          year={release_date.slice(0, 4)}
          image={"https://image.tmdb.org/t/p/w500/" + poster_path}
        />
      ))}
    </>
  );
};
