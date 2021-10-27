import { initialState }                                 from "./state";
import { createStore }                                  from 'redux';
import {composeWithDevTools}                            from 'redux-devtools-extension';
//import { logger }                                       from 'redux-logger';
import { persistStore, persistReducer }                 from 'redux-persist';
import storage                                          from 'redux-persist/lib/storage'

interface Action {
  type: string,
  payload: object
}

export const reducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case "ADD_TO_FAVORITES":
      console.log(state);
      let item = action.payload;
      console.log(item);
      return [...state, item];
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
export const store: any = createStore(persistedReducer);
export const persistor: any = persistStore(store);