import { initialState }                                 from "./state";
import { createStore, applyMiddleware }                 from 'redux';
import {composeWithDevTools}                            from 'redux-devtools-extension';
//import { logger }                                     from 'redux-logger';
import { persistStore, persistReducer }                 from 'redux-persist';
import storage                                          from 'redux-persist/lib/storage'

interface Action {
  type: string,
  payload: object
}

export const reducer = (state = initialState, action: Action) => {
  let item = action.payload;
  switch(action.type) {
    case "ADD_TO_FAVORITES":
      console.log(state);
      console.log(item);
      return {...state, data: item};
    case "REMOVE_FROM_FAVORITES":
      return state
    default: 
      return state
  }
}

const persistConfig = {
  key: "root",
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer);
export const store: any = createStore(persistedReducer, composeWithDevTools(applyMiddleware()));
export const persistor  = persistStore(store);