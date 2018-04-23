import React, {Component} from 'react';
import {Router, Route, Link, Switch  } from 'react-router-dom'
import {Spin,Layout,Row,Col } from 'antd';
import SearchInput from './SearchInput';
import styles from './style.less';
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:false
        }
    }
    render(){
        // console.log(this.props)
        // const {match}=this.props;
        // console.log(match)
        //console.log(Layout.Header)
        const { Header, Content, Sider, Footer } = Layout;
        const {match } =this.props;
        return (
            <Spin spinning={this.state.loading}>
                 <Layout>
                    <Header className={styles['header']}>
                        <Row>
                            <Col span={8}>
                                <div className={styles['logo']}>
                                    <img src="#"  alt="Logo"/>
                                </div>
                            </Col>
                            <Col span={8}>
                                <SearchInput placeholder="input search text"
                                    onSearch={value => console.log(value)}
                                />
                            </Col>
                            <Col span={8}>
                                {/* <Link to={`${match.path}test`}>
                                    登录
                                </Link>|<Link to={`${match.path}test`}>
                                    注册
                                </Link> */}
                            </Col>
                        </Row>
                    </Header>
                </Layout>
                <div>
                     <Route path={`${match.path}test`} component={Test}/>
                </div>
            </Spin>
            

            //     {/* <Link to={`${match.path}test`}>
            //         test
            //     </Link>
            //     <div>
            //         <Route path={`${match.path}test`} component={Test}/>
            //     </div> */}
            // </div>
        )
    }
}

class Test extends Component{
    render(){
        return (
            <div>
                test
            </div>
        )
    }
}
export default App;