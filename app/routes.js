
import React, {Component} from 'react'

import {Router, Route, Link, Switch  } from 'react-router-dom'
import {store,history }from './store/index.js'

import {syncHistoryWithStore } from 'react-router-redux';
// import {createHashHistory} from 'history'
// const history = syncHistoryWithStore(createHashHistory(), store);
import {App,Manager} from './containers/index.js'
import {Provider} from 'react-redux';

import {render} from 'react-dom';
render((
    <Provider store={store}>
        <Router history={history}>
        <div>
            <Route path="/manager" component={Manager}/>

            <Route path="/" component={App}/>
        </div>
        </Router>
    </Provider>
  ), root)
 




// ReactDOM.render((
//     <Provider store={store}>
//         <Router history={history}>
//             <Route path="/">
//                 <App>
//                     <Route path="/home" component={Home}/>
//                     <Route path="/detail" component={Detail}/>
//                 </App>
//             </Route>
//         </Router>
//     </Provider>
   
//   ), root)
 