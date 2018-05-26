import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { toArray as _toArray } from 'lodash';
import Slider from '~/components/Slider';

@inject(({ app }) => ({
  getHotVideoLists: app.getHotVideoLists,
  hotVideoTurn: app.hotVideoTurn,
  allHotVideoList: app.allHotVideoList
}))
@observer
class HotVideo extends Component {
  componentWillMount() {
    this.props.getHotVideoLists();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      style: {
        width: '225px',
        height: '130px'
      },
      arrowStyle: {
        display: 'block',
        background: 'black'
      }
    };

    return (
      <Slider height="150px" settings={settings} data={_toArray(this.props.allHotVideoList)} />
    );
  }
}
HotVideo.propTypes = {
  getHotVideoLists: PropTypes.func,
  allHotVideoList: PropTypes.array
};
export default HotVideo;
