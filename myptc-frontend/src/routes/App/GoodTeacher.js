import React, { Component } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { toArray as _toArray } from 'lodash';
import { observer, inject } from 'mobx-react';
import Slider from '~/components/Slider';

@inject(({ app }) => ({
  getGoodTeacherLists: app.getGoodTeacherLists,
  allGoodTeacherList: app.allGoodTeacherList
}))
@observer
class GoodTeacher extends Component {
  componentWillMount() {
    this.props.getGoodTeacherLists();
  }

  render() {
    const roundWidth = '130px';
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      // centerMode: true,
      style: {
        width: `${roundWidth}`,
        height: `${roundWidth}`,
        borderRadius: '50%'
      },
      arrowStyle: {
        display: 'block',
        background: 'black'
      }
    };
    return <Slider settings={settings} data={_toArray(this.props.allGoodTeacherList)} />;
  }
}
GoodTeacher.propTypes = {
  getGoodTeacherLists: PropTypes.func,
  allGoodTeacherList: PropTypes.array
};
export default GoodTeacher;
