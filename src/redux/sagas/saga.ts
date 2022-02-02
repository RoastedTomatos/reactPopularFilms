import * as actionTypes from "../actionTypes";
import { put, takeEvery, all } from 'redux-saga/effects';
import { setFetchedFilms } from "../actions";

async function getMovies() {
  const request = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4f66593dc56df34fd5abd96e24279fca&language=en-US&page=1")
  const data = await request.json();
  return data;
}

export function* fetchFilms() {
  //@ts-ignore  Не совсем понимаю, какой тип тут используется (Promise?)
  const data = yield getMovies();
  console.log(data.results);
  yield put (setFetchedFilms(data.results));
}

export function* watchFetchFilms() {
  yield takeEvery(actionTypes.FETCH_FILMS, fetchFilms)
}

export default function* rootSaga() {
  yield all([
    watchFetchFilms()
  ]);
}

