import React, {Component} from 'react'
import {connect} from 'react-redux';
import actions from '../../reducers/Home/actions.js'
console.log(actions);
const {home:{homeBtn}} = actions;

class Home extends Component{
    constructor(props){
        super(props);
       
    }
    dwclick(){
        this.props.homeBtn("我被点击啦")
    }
    render(){
        console.log("props:::")
        console.log(this.props)

        return(
            <div>
                <div>Home</div>
                <div onClick={this.dwclick.bind(this)}>点我</div>
                <br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1
                <br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1
                <br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1
                <br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1
            </div>
        )
    }
}
//export default Home;
const mapStateToProps=(state)=>{
    // console.log("state:::")
     console.log(state)
    return {a:"aa",b:"bb"};
}
export default connect(mapStateToProps,{homeBtn})(Home)