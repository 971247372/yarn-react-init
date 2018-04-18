import { createLogic } from 'redux-logic';
import * as types from '../reducers/Home/types.js';
import actions from '../reducers/Home/actions.js';

const { home: { homeBtnSuccess } } = actions;

const homeBtnLogic = createLogic({
  type: types.HOME_BTN,
  process(e, dispatch, done) {
    console.log("logic收到数据啦")
      console.log(e)
  }
});

// const loadLogListLogic = createLogic({
//   type: types.LOAD_LOG_LIST,
//   process({ api, action: { payload: { page, rows, condition } } }, dispatch, done) {
//     api
//       .get('/job/logs', { params: { page, rows, ...condition } })
//       .then(data => dispatch(loadLogListSuccess(data)))
//       .then(() => done());
//   }
// });

export default [homeBtnLogic];
