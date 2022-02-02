import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { favoritesReducer, fetchReducer } from "./redux/reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./redux/sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  favoritesReducer,
  fetchReducer
});

const store: any = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const persist = persistStore(store);

export { store, persist }; 
