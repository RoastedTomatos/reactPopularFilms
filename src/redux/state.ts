import { movieData } from "../types/movie";

export interface initialStateType {
  favoriteFilms: Array<movieData>;
  fetchedFilms: Array<movieData>;
  page: number;
}

export const initialState: initialStateType = {
  favoriteFilms: [],
  fetchedFilms: [],
  page: 1,
};
