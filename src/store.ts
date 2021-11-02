import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'
import { reducer } from "./redux/reducers";

const persistConfig = {
  key: "root",
  storage
}

const store: any = createStore(
  persistReducer(persistConfig, reducer),
  composeWithDevTools(applyMiddleware())
);

const persist = persistStore(store);

export { store, persist };
