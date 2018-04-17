import React, {Component} from 'react';
import {render} from 'react-dom';
import {Layout,Spin,Row,Col,DatePicker} from 'antd';
import style from './style.less';
var img=require('./image/img.png');
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:false
        }
    }
    // componentDidMount(){
    //     this.state={
    //                 loading:true
    //             }
    // }
    render (){
        const {loading}=this.state;
        const { Header, Content, Sider, Footer } = Layout;
        const box={width:"100vm",height:"100vh"};
        return (
           <Spin spinning={loading}>
               <Layout style={box}>
                   <Header className={style['header']}> 
                       <span>
                           图标区
                       </span>
                   </Header>
                    <Content className={style['content']}>
                        1<br/>
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
                        1<br/>  1<br/>  1<br/>  1<br/>  1<br/>  1<br/>
                    </Content>
                    <Footer className={style['footer']}>foot</Footer>
               </Layout>
           </Spin>
        )
    }
}
render(<App/>,root);