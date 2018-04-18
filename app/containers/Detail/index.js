import React, {Component} from 'react'
import {connect} from 'react-redux';
class Detail extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <div>detail</div>
            </div>
        )
    }
}
//export default Detail;
//export default Home;
const mapStateToProps=(state)=>{
    // console.log("state:::")
    // console.log(state)
    return {a:"aa",b:"bb"};
}
const mapDispatchToProps=(dispatch,e)=>{
    // console.log("dispatch::::")
    dispatch({type:"detail"})
    return {c:"cc"}
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail)