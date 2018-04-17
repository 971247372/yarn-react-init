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
            loading:false
        }
    }
    render (){
        const {loading}=this.state;
        const { Header, Content, Sider, Footer } = Layout;
        const box={width:"100vm",height:"100vh"};
        return (
           <Spin spinning={loading}>
               <Layout style={box}>
                   <Header className={style['header']}> 
                       <span>
                         <Icon type="cloud" />
                       </span>
                   </Header>
                    <Content className={style['content']}>
                        <div>app</div>
                        <li><Link to="/home" >Home</Link></li>
                        <li><Link to="/detail" >Detail</Link></li>
                        {this.props.children}
                        {/* 1<br/>
                        1<br/>  
                        <img src={img}/>
                        1<br/>  
                        1<br/>  
                        1<br/>  
                        1<br/>  
                        1<br/>  1<br/>  1<br/>  1<br/>  1<br/>  1<br/>
                        1<br/>
                        1<br/>  
                        1<br/>  
                        1<br/>  
                        1<br/>  
                        1<br/>  
                        1<br/>  1<br/>  1<br/>  1<br/>  1<br/>  1<br/>1<br/>
                        1<br/>  
                        1<br/>  
                        1<br/>  
                        1<br/>  
                        1<br/>  
                        1<br/>  1<br/>  1<br/>  1<br/>  1<br/>  1<br/>1<br/>
                        1<br/>  
                        1<br/>  
                        1<br/>  
                        1<br/>  
                        1<br/>  
                        1<br/>  1<br/>  1<br/>  1<br/>  1<br/>  1<br/> */}
                    </Content>
                    <Footer className={style['footer']}>foot</Footer>
               </Layout>
           </Spin>
        )
    }
}
export default App;