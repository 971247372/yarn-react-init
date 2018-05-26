import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { CTX } from '~/config';
import AuthenticatedRoute from '~/utils/AuthenticatedRoute';

import App from '~/routes/App';
import LoginPage from '~/routes/Login';
import HomePage from '~/routes/Home';

const Routes = props => (
  <Router basename={CTX}>
    <Switch>
      <Route path="/" component={App} ></Route>
      <Route path="/login" component={LoginPage} />
      <AuthenticatedRoute path="/" loginPath="/login" component={HomePage} {...props} />
    </Switch>
  </Router>
);

Routes.propTypes = {
  isSessionLoaded: PropTypes.bool,
  loadSession: PropTypes.func,
  isLoggedIn: PropTypes.bool
};

export default inject(({ session }) => ({
  isSessionLoaded: session.isLoaded,
  isLoggedIn: session.isLoggedIn,
  loadSession: session.load
}))(observer(Routes));
