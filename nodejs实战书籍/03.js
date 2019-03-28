let req = require('./02');
// require.resolve可以查询文件完整的文件名并不会加载该模块
console.log(require.resolve('./02.js'));//E:\学习代码\nodejs学习\nodejs实战书籍\02.js
//查看缓存区中缓存的模块
console.log(require.cache);
