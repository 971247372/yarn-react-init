import React, {Component} from 'react'
const ReactDOM=require('react-dom');
import {Router, Route, Link, Switch  } from 'react-router-dom'
import {store,history }from './store/index.js'
import {syncHistoryWithStore } from 'react-router-redux';
//import {App,Detail,Home} from './containers/index.js'
import {Provider} from 'react-redux';

class Container extends Component{
    constructor (props){
        super(props);
    }
    render(){
        return(
            <div>
                Container
                {this.props.children}
            </div>  
        )
    }
}

class App extends Component{
    constructor (props){
        super(props)
        console.log(props)
    }
    render(){

        return (
            <div>
                app
                
                {this.props.children}
                
            </div>
        )
    }
}
class Home extends Component{
    render(){
        return(
            <div>
                home
            </div>
        )
    }
}
class Detail extends Component{
    render(){
        return(
            <div>
                detail
            </div>
        )
    }
}
class Manager extends Component{
    render(){
        return (
            <div>
                manager
            </div>
        )
    }
}

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/">
                <Container>
                    <Switch>
                        <Route path="/app" component={App}/>
                        <Route path="/manager" component={Manager}/>
                    </Switch>
                </Container> 
            </Route>
        </Router>
    </Provider>
   
  ), root)
 