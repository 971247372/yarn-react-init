import React, {Component} from 'react'
import {connect} from 'react-redux';
import actions from '../../reducers/Home/actions.js'
class Home extends Component{
    constructor(props){
        super(props);
       
    }
    render(){
        console.log("props:::")
        console.log(this.props)
        return(
            <div>
                <div>Home</div>
            </div>
        )
    }
}
//export default Home;
const mapStateToProps=(state)=>{
    // console.log("state:::")
    // console.log(state)
    return {a:"aa",b:"bb"};
}
const mapDispatchToProps=(dispatch,e)=>{
    // console.log("dispatch::::")
    dispatch({type:"home"})
    return {c:"cc"}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)