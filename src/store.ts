import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./redux/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagas/saga";
import { initialState } from "./redux/state";

const sagaMiddleware = createSagaMiddleware();

const store: any = createStore(
  rootReducer,
  //@ts-ignore
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const persist = persistStore(store);

export { store, persist };
