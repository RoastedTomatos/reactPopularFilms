import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';


async function getMovies() {
  const request = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4f66593dc56df34fd5abd96e24279fca&language=en-US&page=1")

  const data = await request.json();

  return data;
}

export function* workerSaga() {
//@ts-ignore  Не совсем понимаю, какой тип тут используется (Promise?)
  const data = yield getMovies();

  console.log(data);

  return data;

}

export function* watchClickSaga() {

  yield takeEvery('GET_MOVIES', workerSaga)

}

export default function* rootSaga() {
  yield watchClickSaga();
}