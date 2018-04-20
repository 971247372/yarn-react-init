
import React, {Component} from 'react'
const ReactDOM=require('react-dom');
import {Router, Route, Link, Switch  } from 'react-router-dom'
import {store,history }from './store/index.js'
console.log(store)
console.log(history)

import {syncHistoryWithStore } from 'react-router-redux';
// import {createHashHistory} from 'history'
// const history = syncHistoryWithStore(createHashHistory(), store);
import {App,Detail,Home} from './containers/index.js'
import {Provider} from 'react-redux';
ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/">
                <App>
                    <Route path="/home" component={Home}/>
                    <Route path="/detail" component={Detail}/>
                </App>
            </Route>
        </Router>
    </Provider>
   
  ), root)
 