import { createStore } from 'redux';
import reducer from "../reducers/index.js";
let store = createStore(reducer);
store.subscribe(() =>
  console.log(store.getState())
);
export default store;