import reducerA from './reducerA';
import reducerB from './reducerB';
import reducerC from './reducerC';
import reducerD from './reducerD';

import {combineReducers} from 'redux';


export default combineReducers({
  reducerA,
  reducerB,
  reducerC,
  reducerD,
})