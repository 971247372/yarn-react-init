import { handleActions } from 'redux-actions';
import * as types from './types';

const initState={}
const reducer = handleActions(
  {
    [types.HOME_BTN_SUCCESS]: (state,{payload:{data}}) => {
      console.log("reducers收到数据啦")
      console.log(data)
    return {};
    }
},
initState
);

  export default reducer;
  