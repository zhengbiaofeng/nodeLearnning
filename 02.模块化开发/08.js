let all = require('./07');
console.log(all); // {};当通过exports直接导出的时候，接收方接受的是一个空对象。
console.log(all); // { str: '张三', fn: [Function: fn], obj: { name: 'biao', age: 19 } };当通过module.exports导出的时候,可以完整接收。
