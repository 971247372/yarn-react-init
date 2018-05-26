import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { chunk as _chunk } from 'lodash';
import styled from 'styled-components';
import { ImgList, Ul } from '~/components/MyStyle';
const NUl = styled(Ul)`
  li {
    width: 200px;
  }
`;
@inject(({ app }) => ({
  currentAllVideoList: app.currentAllVideoList
}))
@observer
class AllVideo extends Component {
  render() {
    return (
      <div>
        {_chunk(this.props.currentAllVideoList, 4).map((val, index) => {
          if (val != undefined) {
            return (
              <ImgList key={`allVideo_${index}`}>
                <NUl>
                  {val.map((v, i) => {
                    if (v != undefined) {
                      return (
                        <li
                          key={`allVideChild_${i}`}
                          style={{
                            backgroundImage: `url(${v.src})`,
                            opacity: 1,
                            backgroundRpeat: 'no-repeat',
                            height: '200px',
                            backgroundSize: '100% 100%'
                          }}
                        >
                          <div>{v.alt}</div>
                        </li>
                        // <li key={`allVideChild_${i}`}>
                        //   <img src={`${v.src}`} alt="" />
                        //   <div>{v.alt}</div>
                        // </li>
                      );
                    }
                    return <li key={`allVideChild_${i}`} />;
                  })}
                </NUl>
              </ImgList>
            );
          }
          return <div key={`allVideo_${index}`} />;
        })}
        {/* <ImgList>
          <ul>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
          </ul>
        </ImgList>
        <ImgList>
          <ul>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
          </ul>
        </ImgList>
        <ImgList>
          <ul>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
          </ul>
        </ImgList>
        <ImgList>
          <ul>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
            <li>
              <img src={require('./hotvideo.png')} alt="" />
              <p>123</p>
            </li>
          </ul>
        </ImgList> */}
      </div>
    );
  }
}
AllVideo.propTypes = {
  currentAllVideoList: PropTypes.array
};
export default AllVideo;
