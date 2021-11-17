//import moviesArray from "../stuff/movies";
import { useDispatch } from "react-redux";
import { MovieCard } from "../components/MovieCard/MovieCard";
import rootSaga from "../redux/sagas/saga";

// export const MovieCardMaker = (): any => (
//   <>
//     {moviesArray.map(({ name, year, genre, image }) => <MovieCard name={name}  year={year} genre={genre} image={image}/>)}
//   </>
// );


export const MovieCardMaker = (): any => {
  const dispatch = useDispatch();
  const moviesObj: object = dispatch({type: "GET_MOVIES"});
  console.log(moviesObj);
  //@ts-ignore
  const moviesArray = moviesObj.results;
  console.log(moviesArray);

  return (
    <>
      {moviesArray.map(({original_title, release_date, poster_path}: any) => <MovieCard name={original_title} year={release_date} image={poster_path} />)}
      {/* {moviesArray.map(({ name, year, genre, image }) => <MovieCard name={name}  year={year} genre={genre} image={image}/>)} */}
    </>
  )
}