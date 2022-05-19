import { movieData } from "../types/movie";
import * as actionTypes from "./actionTypes";

export const setFavorites = (favorites: Array<movieData>) => ({
  type: actionTypes.SET_FAVORITES,
  payload: favorites,
});

export const setFetchedFilms = (fetched: Array<movieData>) => ({
  type: actionTypes.SET_FETCHED_FILMS,
  payload: fetched,
});

export const fetchFilms = () => ({
  type: actionTypes.FETCH_FILMS,
});
