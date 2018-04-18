// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import store from './store/index.js'
// import logices from './logices/index.js'
// import { createBrowserHistory } from 'history';
// import { applyMiddleware } from 'redux';
// import { Provider, connect } from 'react-redux';
// import { browerHistory,IndexRoute } from 'react-router';
// import { BrowserRouter, Route, Link } from 'react-router-dom'
// import {ConnectedRouter, syncHistoryWithStore } from 'react-router-redux';

// logices(store);
// const history = syncHistoryWithStore(createBrowserHistory(), store);
// class App extends Component {
//     constructor(props) {
//         super(props)
//         console.log(props)
//     }
//     render() {
//         return (
//             <div>
//                 {this.props.children}
//             </div>
//         )
//     }
// }
// class Head extends Component {
//     constructor(props) {
//         super(props);
//         console.log(props);
//     }
//     render() {
//         return (
//             <h1>Header</h1>
//         )
//     }
// }
// class NoMatch extends Component{
//     render(){
//         return (
//             <div>
//                 nop Match
//             </div>
//         )
//     }
// }
// class Routes extends Component {
//     render() {
//         return (
//             <BrowserRouter>
//             <Route path="/" component={App}>
//               <Route path="head" component={Head}/>
//               <Route path="*" component={NoMatch}/>
//             </Route>
//           </BrowserRouter>
//         )
//     }
// }
// render(<Routes />, root);





import React, {Component} from 'react'
const ReactDOM=require('react-dom');
import { HashRouter as Router, Route, Link, Switch  } from 'react-router-dom'
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
 