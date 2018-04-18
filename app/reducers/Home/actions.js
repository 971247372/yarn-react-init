import {createActions} from 'redux-actions';
import * as types from './types.js';
const actions=createActions({
	[types.HOME_BTN]:(params)=>({params}),
	[types.HOME_BTN_SUCCESS]:data=>({data})


})
export default actions;