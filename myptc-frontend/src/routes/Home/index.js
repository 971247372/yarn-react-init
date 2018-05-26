import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
// import styled from 'styled-components';

class Home extends Component {
  state = {
    collapsed: false
  };

  handleMenuCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <Layout>
        <div>
          HELLO WORLD
        </div>
      </Layout>
    );
  }
}

Home.propTypes = {};

export default Home;
