interface Action {
  type: string,
  payload: any
}

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