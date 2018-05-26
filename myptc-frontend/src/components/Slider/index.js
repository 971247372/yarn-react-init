import React, { Component } from 'react';
import Slider from 'react-slick';
import PropType from 'prop-types';
import styled from 'styled-components';
const Ul = styled.ul`
  list-style: none;

  li {
    position: relative;
    margin-bottom: 20px;
    div {
      position: absolute;
      bottom: -20px;
      width: 100%;
      text-align: center;
    }
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  // console.log(props);
  return <div className={className} style={{ ...style, ...props.arrowStyle }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, ...props.arrowStyle }} onClick={onClick} />;
}

export default class MultipleItems extends Component {
  render() {
    return (
      <Slider
        {...{
          nextArrow: (
            <SampleNextArrow
              arrowStyle={this.props.settings.nextArrow || this.props.settings.arrowStyle || {}}
            />
          ),
          prevArrow: (
            <SamplePrevArrow
              arrowStyle={this.props.settings.prevArrow || this.props.settings.arrowStyle || {}}
            />
          )
        }}
        {...this.props.settings}
      >
        {this.props.data.map((val, index) => {
          if (val != undefined) {
            return (
              // <div style={style} key={`${val.alt}_${index}`}>
              //   <img height={this.props.height || '100%'} src={`${val.src}`} alt="" />
              //   <div>{val.alt}</div>
              // </div>
              <Ul key={`${val.alt}_${index}`}>
                {/* <img height={this.props.height || '100%'} src={`${val.src}`} alt="" /> */}
                <li
                  style={{
                    backgroundImage: `url(${val.src})`,
                    opacity: 1,
                    backgroundRpeat: 'no-repeat',
                    height: '200px',
                    backgroundSize: '100% 100%',
                    ...(this.props.settings.style || {})
                  }}
                >
                  <div>{val.alt}</div>
                </li>
              </Ul>
            );
          }
          return <div key={`slider_${index}`} />;
        })}
      </Slider>
    );
  }
}
MultipleItems.propTypes = {
  data: PropType.array,
  settings: PropType.object,
  height: PropType.string
};

const ArrowType = {
  className: PropType.string,
  style: PropType.object,
  onClick: PropType.func,
  arrowStyle: PropType.object
};
SampleNextArrow.propTypes = ArrowType;
SamplePrevArrow.propTypes = ArrowType;
