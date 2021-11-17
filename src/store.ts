import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'
import { reducer } from "./redux/reducers";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./redux/sagas/saga";

const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: "root",
//   storage,
//   stateReconciler: hardSet
// }

const store: any = createStore(
  //persistReducer(persistConfig, reducer),
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const persist = persistStore(store);

export { store, persist }; 
