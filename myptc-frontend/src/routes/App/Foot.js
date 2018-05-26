import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { PaddingBox } from '~/components/MyStyle';
import styled from 'styled-components';
const Ul = styled.ul`
  list-style: none;

  li {
    display: inline;
    margin-right: 20px;
  }
`;
class Foot extends Component {
  render() {
    return (
      <PaddingBox>
        <Row>
          <Col offset={3} span={9}>
            <Ul>
              <li>联系我们</li>
              <li>技术支持</li>
              <li>索取报价单</li>
              <li>免费下载使用软件</li>
            </Ul>
            <br />
            <Ul>
              <li>&copy;&nbsp;版权&nbsp;2017</li>
              <li>友创</li>
              <li>苏IP备09015427号</li>
            </Ul>
          </Col>
          <Col span={12}>二维码</Col>
        </Row>
      </PaddingBox>
    );
  }
}
export default Foot;
