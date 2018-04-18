import {createStore} from 'redux';
import reducers from "../reducers/index.js";

import logices from '../logices/index.js';

const store = createStore(reducers)
//logices(store);
export default store;