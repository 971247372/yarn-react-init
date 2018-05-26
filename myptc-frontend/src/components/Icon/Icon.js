import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Icon = ({
  type, style, className, ...props 
}) => {
  const cls = classnames('leanicon', `lean-icon-${type}`, className);
  return <i className={cls} style={style} {...props} />;
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
};

export default Icon;
