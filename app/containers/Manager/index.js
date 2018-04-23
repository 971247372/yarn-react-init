import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
class Manager extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props)
        return (
            
            <div>
                manager
                <Link to={`${this.props.match.path}/c`}>c</Link>
                <Route exact path={`${this.props.match.path}/c`} component={Child} />
            </div>
        )
    }
}
export default Manager;


const Child = () => <div>Child</div>;