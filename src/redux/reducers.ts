import { addToFavorites, removeFromFavorites }          from "./actions";
import { initialState }                                 from "./state";
import { createStore }                                  from 'redux'

interface Action {
  type: string,
  payload: object
}

export const reducer = (state = initialState, action: Action): any => {
  switch(action.type) {
    case "ADD_TO_FAVORITES":
      return console.log("action added")
      //return [...state].push(action.payload);
    case "REMOVE_FROM_FAVORITES":
      return state
    default: 
      return state
  }
 }

export const store = createStore(reducer);