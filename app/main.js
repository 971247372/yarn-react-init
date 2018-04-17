import React from 'react';
import {render} from 'react-dom';
import store from './store/index.js'
import logices from './logices/index.js' 
import './app.global.css';

logices(store);




require ("./containers/App/index.js");


