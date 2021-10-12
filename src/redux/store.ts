import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
  actionsBlacklist: '_SUCCESS'
})
const store = createStore(
  rootReducer,
  composeEnhancers()
  );

export default store;