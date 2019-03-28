// Node在内部，let exports = module.exports;即他们都指向同一个地址。

let mdl = {
    exp: { age: 19 },
    name: 'aaa',
};
let exp = mdl.exp;
console.log(exp);

// 一旦给exp赋值对象类型的，就会破坏两者的绑定关系，等于给了exp一个新的地址。因此，只能通过module.exports来导出。