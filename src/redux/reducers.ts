import { combineReducers } from "redux";
import { initialState } from "./state";

interface Action {
  type: string,
  payload: object
}

export const favoriteFilms: any = initialState.data;
export const fetchedFilms: any = initialState.fethcedData;

const favoritesReducer = (
  state = {favoriteFilms: []},action: Action) => {
  switch(action.type) {
    case "SET_FAVORITES":
      return {...state, favoriteFilms: action.payload};
    default:
      return state;
  }
}

const fetchReducer = (
  state = {fetchedFilms: []},action: Action) => {
  switch(action.type) {
    case "REQUEST_FILMS":
      return {...state, fetchedFilms: action.payload};
    default:
      return state;
  }
}

export const rootReducer = combineReducers({favoritesReducer: favoritesReducer, fetchReducer: fetchReducer})