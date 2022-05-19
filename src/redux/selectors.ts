import { get } from "lodash";
import { initialStateType } from "./state";

export const getFavorites = (state: initialStateType) => {
  return get(state, "favoritesReducer.favoriteFilms", []);
};

export const getFetched = (state: initialStateType) => {
  console.log(get(state, "fetchReducer.fetchedFilms", []));
  return get(state, "fetchReducer.fetchedFilms", []);
};
