import { initialState } from "./state";

interface Action {
  type: string,
  payload: object
}

export const favoriteFilms = initialState.data;

export const reducer = (
  state = {
    favoriteFilms: []
  },
  action: Action
) => {
  switch(action.type) {
    case "SET_FAVORITES":
      return {...state, favoriteFilms: action.payload};
    default:
      return state;
  }
}