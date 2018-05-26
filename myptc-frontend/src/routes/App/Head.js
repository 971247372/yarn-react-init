import React, { Component } from 'react';
import { Col } from 'antd';
import styled from 'styled-components';
import logo from './logo_white.png';
import InputSearch from './InputSearch';

const LogoContainer = styled(Col)``;

const UserheadContainer = styled(Col)`
  color: #fff;
`;

class AppHeader extends Component {
  render() {
    return (
      <div>
        <LogoContainer span={6}>
          <img src={logo} alt="Logo" />
        </LogoContainer>
        <InputSearch />
        <UserheadContainer span={6}>
          <Col offset={14} span={4}>
            <img src={require(`${'./userhead.png'}`)} alt="" />
          </Col>
          <Col>用户名1</Col>
        </UserheadContainer>
      </div>
    );
  }
}
export default AppHeader;
