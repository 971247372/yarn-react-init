import React, { Component } from 'react';
// import styled from 'styled-components';
// import { Carousel } from 'antd';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { toArray as _toArray } from 'lodash';
import Slider from '~/components/Slider';

// const BannerCarousel = styled(Carousel)`
//   div {
//     width: 100%;
//   }
// `;
@inject(({ app }) => ({
  banners: app.banners,
  getBanners: app.getBanners
}))
@observer
class Banner extends Component {
  componentDidMount() {
    this.props.getBanners();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      isRound: true,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear',
      style: {
        height: '520px'
      }
    };
    return (
      <Slider settings={settings} data={_toArray(this.props.banners)} />
      // <BannerCarousel autoplay>
      //   {this.props.banners.map((val, index) => (
      //     <div key={`banner_${index}`}>
      //       {/* <img width="100%" src={require(`${val}`)} alt="" /> */}
      //       <img width="100%" src={`${val}`} alt="" />
      //     </div>
      //   ))}
      // </BannerCarousel>
    );
  }
}
Banner.propTypes = {
  getBanners: PropTypes.func,
  banners: PropTypes.array
};
export default Banner;
