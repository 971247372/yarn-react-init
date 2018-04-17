import {createActions} from 'redux-actions';
import * as types from './types';
var actions=createActions({
    [types.BTN]:(str)=>{
        console.log(str);
        return {str}
    },
    [types.BTN_SUCCESS]:(data)=>{
        console.log("success")
        console.log(data);
        return {data};
    }
});

export default actions;