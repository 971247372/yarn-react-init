import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon as AntIcon } from 'antd';
import Icon from '../Icon';

const Container = styled.div`
  display: inline-block;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  color: #ccc;

  &:hover {
    cursor: pointer;
    color: #fff;
  }

  i {
    font-size: 16px;
    vertical-align: middle;
  }
`;

const IconLink = ({
  type, icon, text, ...otherProps 
}) => {
  let iconEle = icon;
  if (type == 'leanBI') {
    iconEle = <Icon type={icon} />;
  } else if (typeof icon == 'string') {
    iconEle = <AntIcon type={icon} />;
  }
  return (
    <Container {...otherProps}>
      {iconEle}
      <div>{text}</div>
    </Container>
  );
};

IconLink.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.node,
  className: PropTypes.string
};

export default IconLink;
