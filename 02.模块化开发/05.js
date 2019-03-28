// 那么最外层的函数长什么样子呢，我们通过arguments.callee来看一下
// console.log(arguments.callee); //[Function]
// console.log(arguments.callee + '');
// function (exports, require, module, __filename, __dirname) { // 那么最外层的函数长什么样子呢，我们通过arguments.callee来看一下
//     console.log(arguments.callee); //[Function]
//     console.log(arguments.callee + '');

//     }

//模块当中的所有代码，都是在函数中做的。函数接受五个参数：exports，require，module，__filename,__dirname:
//module参数，代表当前模块本身
// console.log(module);

// 输出结果如下：
/**
  Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'E:\\学习代码\\nodejs学习\\02.模块化开发\\05.js',
  loaded: false,
  children: [],
  paths:
   [ 'E:\\学习代码\\nodejs学习\\02.模块化开发\\node_modules',
     'E:\\学习代码\\nodejs学习\\node_modules',
     'E:\\学习代码\\node_modules',
     'E:\\node_modules' ] }
 * 
 *  */

// 发现module下面也有exports，他是一个对象。那么module.exports和exports有什么区别呢：
console.log(module.exports === exports); // true
console.log(__filename);//E:\学习代码\nodejs学习\02.模块化开发\05.js
console.log(__dirname);//E:\学习代码\nodejs学习\02.模块化开发

