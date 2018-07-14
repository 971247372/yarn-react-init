import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import { CTX } from '~/config';
import SessionRoute from '~/utils/SessionRoute';
// import AuthenticatedRoute from '~/utils/AuthenticatedRoute';
import LoginResultPage from '~/routes/LoginResult';
import VideoTestPage from '~/routes/VideoTest';
import VideoPage from '~/routes/Video';
import SeriesPage from '~/routes/Series';
import ChapterPage from '~/routes/Chapter';
import TagPage from '~/routes/Tag';
import LecturerPage from '~/routes/Lecturer';
import SearchPage from '~/routes/Search';
import SignPage from '~/routes/Sign';
import TabBarRoutes from './TabBarRoutes';

const Routes = props => (
  <Fragment>
    {/* header */}
    <Router basename={CTX}>
      <div>
        <WhiteSpace size="sm" />
        <WingBlank size="md">
          <Switch>
            <Route
              exact
              path="/:loginResult(login-success|login-fail|login-ready)"
              component={LoginResultPage}
            />
            <SessionRoute {...props}>
              <Switch>
                <Route exact path="/video-test/:id" component={VideoTestPage} />
                <Route exact path="/video/:id" component={VideoPage} />
                {/* 课程列表 */}
                <Route exact path="/series" component={SeriesPage} />
                {/* 课程集数 */}
                <Route exact path="/series/:id" component={ChapterPage} />
                {/* 讲师主页 */}
                <Route exact path="/lecturer/:id" component={LecturerPage} />
                {/* 类型列表 */}
                <Route exact path="/tag" component={TagPage} />
                {/* 搜索页面 */}
                <Route exact path="/search" component={SearchPage} />
                {/* 注册页面 */}
                <Route exact path="/register" component={SignPage} />

                <Route component={TabBarRoutes} />
              </Switch>
            </SessionRoute>
          </Switch>
        </WingBlank>
        <WhiteSpace size="sm" />
      </div>
    </Router>

    {/* footer */}
  </Fragment>
);

Routes.propTypes = {
  // isSessionLoaded: PropTypes.bool,
  // loadSession: PropTypes.func,
  // isLoggedIn: PropTypes.bool
};

export default inject(({ session }) => ({
  isSessionLoaded: session.isLoaded,
  isLoggedIn: session.isLoggedIn,
  loadSession: session.load
}))(observer(Routes));

