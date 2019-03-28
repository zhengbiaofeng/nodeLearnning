// let str = '我是啸2';

// let fn =()=>{
//     console.log('今天的天气很好');
// };

// exports.str = str;
// exports.test = fn;

let fn = require('./01');
console.log(fn);//{ sum: [Function], avg: [Function] }
fn.sum(1,2,3,4);

// node封装的所有模块，都类似于这种方式,叫做核心模块，自己封装的叫功能模块：
let fs = require('fs');
let http = require('http');