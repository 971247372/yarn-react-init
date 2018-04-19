import { handleActions } from 'redux-actions';
import * as types from './types';

const initState={}
const reducer = handleActions(
  {
    [types.HOME_BTN_SUCCESS]: (state,{payload:{data}}) => {
      console.log("reducers收到数据啦")
      console.log(data)
    return {"reducer":"流程结束"};
    }
},
initState
);

  export default reducer;
  