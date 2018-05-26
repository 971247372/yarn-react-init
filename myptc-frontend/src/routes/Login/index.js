import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout } from 'antd';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import Form from './LoginForm';

const Header = styled(Layout.Header)`
  position: relative;
  background: #f3f7f9;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
`;

const Footer = styled(Layout.Footer)`
  background: #f3f7f9;
  color: #fff;
`;

const Content = styled(Layout.Content)`
  background: #f3f7f9;
  height: calc(100vh - 64px - 66px);
`;

const Title = styled.div`
  width: 550px;
  margin: 60px auto 0 !important;
  line-height: 30px;
`;

@inject(({ session }) => ({
  isLoggedIn: session.isLoggedIn
}))
@observer
class Login extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      // forward to home page while logged in.
      this.props.history.replace('/');
    }
  }

  render() {
    return (
      <Layout>
        <Helmet title="登录" />
        <Header />
        <Content>
          <Title>
            <div style={{ fontSize: 30, color: '#4472fc' }}>登录</div>
            <div>欢迎使用 LEAN-BI</div>
          </Title>
          <Form />
        </Content>
        <Footer>
          <center>footer</center>
        </Footer>
      </Layout>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object,
  isLoggedIn: PropTypes.bool
};

export default Login;
