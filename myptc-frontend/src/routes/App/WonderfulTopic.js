import React, { Component } from 'react';
import styled from 'styled-components';
import { ImgList, Ul } from '~/components/MyStyle';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
const Nul = styled(Ul)`
  li {
    width: 250px;
    height: 150px;
  }
`;

@inject(({ app }) => ({
  getWonderfulTopicLists: app.getWonderfulTopicLists,
  currentWonderfulTopList: app.currentWonderfulTopList
}))
@observer
class WonderfulTopic extends Component {
  componentWillMount() {
    this.props.getWonderfulTopicLists();
  }
  render() {
    return (
      <ImgList>
        <Nul>
          {this.props.currentWonderfulTopList.map((val, index) => {
            if (val) {
              return (
                <li
                  key={`wonderful_${index}`}
                  style={{
                    backgroundImage: `url(${val.src})`,
                    opacity: 1,
                    backgroundRpeat: 'no-repeat',
                    backgroundSize: '100% 100%'
                  }}
                >
                  <div>{val.alt}</div>
                </li>
                // <li key={`wonderful_${index}`}>
                //   <img src={require(`${val.src}`)} alt="" />
                //   <p>{val.alt}</p>
                // </li>
              );
            }
            return <li key={`wonderful_${index}`} />;
          })}
        </Nul>
      </ImgList>
    );
  }
}
WonderfulTopic.propTypes = {
  getWonderfulTopicLists: PropTypes.func,
  currentWonderfulTopList: PropTypes.array
};
export default WonderfulTopic;
