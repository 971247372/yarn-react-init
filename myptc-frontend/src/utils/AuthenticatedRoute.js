import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';

class AuthenticatedRoute extends PureComponent {
  componentWillMount() {
    const { isSessionLoaded } = this.props;
    // 检查是否已经读取过session信息
    if (!isSessionLoaded) {
      // 未读取过session
      // 派发读取请求
      return this.props.loadSession();
    }
  }

  render() {
    const {
      component: Component,
      loginPath,
      isLoggedIn,
      isSessionLoaded,
      loadSession,
      ...rest
    } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          if (!isSessionLoaded) {
            return null;
          }
          return isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: loginPath,
                state: { from: props.location }
              }}
            />
          );
        }}
      />
    );
  }
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  loginPath: PropTypes.string.isRequired,
  isSessionLoaded: PropTypes.bool.isRequired,
  loadSession: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default withRouter(AuthenticatedRoute);
