import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux'

import home from './Home/index.js';
import detail from './Detail/index.js'
export default combineReducers({
  home,
  detail,
  routing: routerReducer
})