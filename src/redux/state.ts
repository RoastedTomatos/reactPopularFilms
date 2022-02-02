import { movieData } from "../models/movie";

export interface initialStateType {
  favoriteFilms: Array<movieData>
  fetchedFilms: Array<movieData>
}
