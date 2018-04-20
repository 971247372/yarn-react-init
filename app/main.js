import './app.global.css';
import { isPast } from 'date-fns';
require('./routes.js');

var ua = navigator.userAgent;

var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

isAndroid = ua.match(/(Android)\s+([\d.]+)/),

isMobile = isIphone || isAndroid;

//判断

if(isMobile){
console.log("is Mobile")
}else{
console.log("is Computer")
}