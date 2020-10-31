import reducer from './reducer';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reduxThunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


export default createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));