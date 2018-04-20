import React, {Component} from 'react';
import {render} from 'react-dom';
import {Layout,Spin,Row,Col,DatePicker,Icon} from 'antd';
import { Link} from 'react-router-dom';
import style from './style.less';
var img=require('./image/img.png');
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:true
        }
    } 
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                loading:false
            })
        }, 100);
    }
    render (){
        const {loading}=this.state;
        const { Header, Content, Sider, Footer } = Layout;
        const box={width:"100vm",height:"100vh"};
        return (
           <Spin spinning={loading}>
               {
                   !this.state.loading&&(
                    <Layout style={box}>
                    <Header className={style['header']}> 
                         <ul>
                             <li><Link to="/home" >Home</Link></li>
                             <li><Link to="/detail" >Detail</Link></li>
                         </ul>
                        <span>
                          <Icon type="cloud" />
                        </span>
                    </Header>
                     <Content className={style['content']}>                       
                         {this.props.children}                      
                     </Content>
                </Layout>
                   )
               }
           </Spin>
        )
    }
}
export default App;