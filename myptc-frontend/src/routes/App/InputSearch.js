import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';
import styled from 'styled-components';
const SearchContainer = styled(Col)``;
const SearchBox = styled(Row)`
  background-color: rgb(64, 64, 64);
  opacity: 0.5;
  border-radius: 40px;
  font-size: 15px;
  transform: scale(0.85);
  color: #fff;
  input {
    width: 100%;
    height: 40px;
    border: none;
    background-color: transparent;
  }
`;
const SearchText = styled(Col)`
  text-align: center;
  color: #fff;
  opacity: 1;
`;
const SearchButtonBox = styled(Col)`
  width: 100%;
  position: relative;
  > span {
    position: absolute;
    border-left: 2px solid white;
    display: inline-block;
    height: 25px;
    top: 50%;
    transform: translateY(-50%);
  }
  i {
    display: inline-block;
    position: absolute;
    width: 15px;
    height: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
  }
`;
class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  searchValue = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <SearchContainer span={12}>
        <SearchBox>
          <SearchText span={3}>搜索视频</SearchText>
          <Col span={18}>
            <input onChange={this.searchValue} value={this.state.value} htmltype="text" />
          </Col>
          {/* <Col span={2}>
              <button>
                <Icon type="search" />
              </button>
            </Col> */}
          <SearchButtonBox span={3}>
            &nbsp;&nbsp;
            <span />
            <i className="anticon anticon-search" />
          </SearchButtonBox>
        </SearchBox>
      </SearchContainer>
    );
  }
}
export default InputSearch;
