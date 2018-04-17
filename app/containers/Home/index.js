import React, {Component} from 'react'
class Home extends Component{
    constructor(props){
        super(props);
        console.log(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <div>Home</div>
            </div>
        )
    }
}
export default Home;