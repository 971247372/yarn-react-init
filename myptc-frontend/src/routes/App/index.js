import React, { Component } from 'react';
import { Layout } from 'antd';

import Helmet from 'react-helmet';
import styled from 'styled-components';

import AppContent from './appContent';
import AppHeader from './Head';
import AppFoot from './Foot';

const Header = styled(Layout.Header)`
  position: relative;
  position: absolute;
  width: 100%;
  z-index: 999;
  background-color: transparent;
  /* box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15); */
`;

const Footer = styled(Layout.Footer)`
  background: rgb(33, 33, 33);
  color: #fff;
`;

const Content = styled(Layout.Content)`
  background: #f3f7f9;
  min-height: calc(100vh - 64px - 66px);
  //height: calc(100vh - 64px);

  /* padding: 0 50px;
  height: 64px;
  line-height: 64px; */
`;

class App extends Component {
  render() {
    return (
      <Layout>
        <Helmet title="首页" />
        <Header>
          <AppHeader style={{ position: 'absoulte' }} />
        </Header>
        <Content>
          <AppContent />
        </Content>
        <Footer>
          <center>
            <AppFoot />
          </center>
        </Footer>
      </Layout>
    );
  }
}

export default App;
