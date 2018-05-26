import React, { Component } from 'react';
import styled from 'styled-components';
import { Popover, Button } from 'antd';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
// 浮动的标题列表
const List = styled.div`
  ul {
    width: 100%;
    margin: -2px 0 0 0;
    li {
      list-style: none;
      float: left;
      width: 150px;
      padding-right: 30px;
    }
  }
  span {
    float: right;
  }
  &after {
    clear: both;
  }
`;
@inject(({ app }) => ({
  titleList: app.titleList,
  moreTitleList: app.moreTitleList,
  getTitleLists: app.getTitleLists
}))
@observer
class TitleList extends Component {
  componentDidMount() {
    this.props.getTitleLists();
  }
  render() {
    return (
      <List>
        <ul>
          {this.props.titleList.map((val, index) => <li key={`titlelist_${index}`}>{val.name}</li>)}
        </ul>
        <span>
          <Popover
            placement="bottomLeft"
            title="列表"
            content={
              <div>
                {this.props.moreTitleList.map((val, index) => (
                  <div key={`list_${index}`}>{val.name}</div>
                ))}
              </div>
            }
            trigger="click"
          >
            <Button>更多</Button>
          </Popover>
        </span>
      </List>
    );
  }
}
TitleList.propTypes = {
  getTitleLists: PropTypes.func,
  titleList: PropTypes.array,
  moreTitleList: PropTypes.array
};
export default TitleList;
