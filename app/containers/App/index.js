import React, {Component} from 'react';
import {render} from 'react-dom';
import {Row,Col,DatePicker} from 'antd';
import styles from './style.css';
import style2 from './style2.css';
class App extends Component{
    render (){
        return (
            <div>
                <Row>
                    <Col span={6}>
                        左边
                    </Col>
                    <Col span={6}>
                        右边
                    </Col>
                    <DatePicker/>
                </Row>
                <h1 className={styles['h1']}>123</h1>
                <h1 className={style2['h1']}>456</h1>
            </div>
        )
    }
}
render(<App/>,root);