import {createStore,combineReducers} from 'redux';
import reducers from "../reducers/index.js";
import {routerReducer} from 'react-router-redux';


const store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  })
)

export default store;