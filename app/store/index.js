import {createStore,applyMiddleware,compose} from 'redux';
import reducers from "../reducers/index.js";
import logices from '../logices/index.js';
import { createHashHistory } from 'history';
const history = createHashHistory();

import { createLogicMiddleware } from 'redux-logic';
const middleware=[];
const enhancers=[];
//middleware.push(createLogicMiddleware(logices, { api, history }));
middleware.push(createLogicMiddleware(logices,{}));

enhancers.push(applyMiddleware(...middleware));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionCreators,
    })
    : compose;
const enhancer = composeEnhancers(...enhancers);

const initialState={};
const store = createStore(reducers, initialState, enhancer);
//logices(store);
export  {store,history};