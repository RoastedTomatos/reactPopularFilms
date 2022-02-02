import * as actionTypes from "./actionTypes";

interface Action {
  type: string,
  payload: object
}

export const favoritesReducer = (
  state = {
    favoriteFilms: []
  },
  action: Action
) => {
  switch(action.type) {
    case actionTypes.SET_FAVORITES:
      return {...state, favoriteFilms: action.payload};
    default:
      return state;
  }
}

export const fetchReducer = (
  state = {
    fetchedFilms: []
  },
  action: Action
) => {
  switch(action.type) {
    case actionTypes.SET_FETCHED_FILMS:
      return {...state, fetchedFilms: action.payload};
    default:
      return state;
  }
}
