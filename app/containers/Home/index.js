import React, {Component} from 'react'
import {connect} from 'react-redux';
import actions from '../../reducers/Home/actions.js'
//import MenuItem from 'antd/lib/menu/MenuItem';

import {Menu,Button,Col,Row,Cascader,DatePicker} from 'antd';
import Children from './component/child.js';
const SubMenu=Menu.SubMenu;
const MenuItemGroup=Menu.ItemGroup;
const MenuItem=Menu.Item;
console.log(actions);
const {home:{homeBtn}} = actions;

class Home extends Component{
    constructor(props){
        super(props);
        console.log(props)
        props.history.push("/detail")
        this.state={
            show:true
        }
    }
    dwclick(){
        this.props.homeBtn("我被点击啦")
    }
    render(){
        console.log("props:::")
        console.log(this.props)
        const options = [{
            value: 'zhejiang',
            label: '浙江'
            
          }];
        

          const toChild=()=>{
            this.setState({
                show:false
            })
          }
        return(
            <div>
                <div>Home</div>
                <div onClick={this.dwclick.bind(this)}>点我</div>
               
                <Menu theme={"light"} mode={"horizontal"}>
                    <MenuItem disabled={true}>菜单1</MenuItem>
                    <MenuItem>菜单2</MenuItem>
                    <MenuItem>菜单3</MenuItem>
                    <MenuItem>菜</MenuItem>
                    <SubMenu title={"导航"}>
                        <MenuItemGroup title="分组一">
                            <MenuItem>紫菜单</MenuItem>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
                <Button>按钮</Button>
                <Button type="primary" size="large" loading>按钮</Button>
                <Button type="ghost">按钮</Button>
                <Button type="dashed">按钮</Button>
                <Row>
                    <Col span={1} offset={3}>123</Col>
                </Row>
                <Row type="flex" justify="space-between">
                    <Col span={1} push={1}>1</Col>
                    <Col span={1}>2</Col>
                </Row>
                <Cascader options={options} placeholder="请选择组件"/>
                <Row>

                    <Col>
                    
                    </Col>

                    {
                        this.state.show&&(
                            <div>父类展示区</div>
                        )
                    }
                    <Children data={toChild}/>
                </Row>


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