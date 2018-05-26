import React, { Component } from 'react';

import styled from 'styled-components';
import { observer } from 'mobx-react';
import { PaddingBox } from '~/components/MyStyle';
import Banner from './Banner';
import TitleList from './TitleList';
import HotVideo from './HotVideo';
import WonderfulTopic from './WonderfulTopic';
import AllVideo from './AllVideo';
import GoodTeacher from './GoodTeacher';
const BoxContainer = styled.div``;

// 标题
const Title = styled.div`
  height: 95px;
  line-height: 95px;
  font-size: 14px;
  span {
    float: right;
  }
`;

const WhiteBackGroudd = styled.div`
  height: 100px;
  background-color: #fff;
  line-height: 100px;
  font-size: 16px;
`;
@observer
class AppContent extends Component {
  componentDidMount() {}
  render() {
    // console.log(this.props);
    return (
      <BoxContainer>
        <Banner />
        <WhiteBackGroudd>
          <PaddingBox>
            <TitleList />
          </PaddingBox>
        </WhiteBackGroudd>

        <PaddingBox>
          <Title>热门视频</Title>
          <HotVideo />
          {/* <div style={{ clear: 'both' }} /> */}
          <Title>
            精彩专题
            <span>查看更多</span>
          </Title>
          {/* <div style={{ clear: 'both' }} /> */}
          <WonderfulTopic />
          <Title>
            全部视频
            <span>查看更多</span>
          </Title>
          <AllVideo />

          <Title>
            优秀讲师
            <span>查看更多</span>
          </Title>
          <GoodTeacher />
        </PaddingBox>
      </BoxContainer>
    );
  }
}
export default AppContent;
