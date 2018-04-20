import React , {Component} from 'react';
class Children extends Component{
    constructor(props){
        super(props);
        
        //props.data();
    }
    click(){
        this.props.data()
    }
    render(){
        return (
            <div onClick={this.click.bind(this)}>
                子组件
            </div>
        )
    }
}
export default Children;