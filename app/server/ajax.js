// let http=require('http');
// http.get('./app.global.css', function (res) {
//     //console.log("statusCode: ", res.statusCode);
//     //console.log("headers: ", res.headers);
//     var data = '';
//     res.on('data', function (d) {
//         data += d;
//     });
//     res.on('end',function(){
//         //获取到的数据
//         console.log(data)
//     });
// }).on('error', function (e) {
//     console.error(e);
// });