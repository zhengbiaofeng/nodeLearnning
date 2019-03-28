//exports和require是怎么来的。

// console.log(global);
// console.log(global.exports);//undefined
// console.log(global.require);//undefined

//上面证明，他不是全局变量。

// 其实他是函数的参数，如何证明他是函数参数，我们输出arguments，arguments可以证明函数
console.log(arguments);

/*[Arguments] {
    '0': {},
    '1':
     { [Function: require]
       resolve: { [Function: resolve] paths: [Function: paths] },
       main:
        Module {
          id: '.',
          exports: {},
          parent: null,
          filename: 'E:\\学习代码\\nodejs学习\\02.模块化开发\\04.js',
          loaded: false,
          children: [],
          paths: [Array] },
       extensions:
        { '.js': [Function], '.json': [Function], '.node': [Function] },
       cache: { 'E:\\学习代码\\nodejs学习\\02.模块化开发\\04.js': [Module] } },
    '2':
     Module {
       id: '.',
       exports: {},
       parent: null,
       filename: 'E:\\学习代码\\nodejs学习\\02.模块化开发\\04.js',
       loaded: false,
       children: [],
       paths:
        [ 'E:\\学习代码\\nodejs学习\\02.模块化开发\\node_modules',
          'E:\\学习代码\\nodejs学习\\node_modules',
          'E:\\学习代码\\node_modules',
          'E:\\node_modules' ] },
    '3': 'E:\\学习代码\\nodejs学习\\02.模块化开发\\04.js',
    '4': 'E:\\学习代码\\nodejs学习\\02.模块化开发' }*/