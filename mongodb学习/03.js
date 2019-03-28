// 1、引入模块
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/m_data', { useNewUrlParser: true });
// 2、监听各种状态
let db = mongoose.connection;
db.once('open', function () {
    console.log('连接成功');
});

//2、创建对象规范
let Schema = mongoose.Schema;
let personSchema = new Schema({
    name: String,
    age: Number,
    sex: {
        type: String,
        default: "男"
    },
    chat: String

})

// 3、创建modal对象,类似于集合
let personModal = mongoose.model('person', personSchema);

// 4、插入文档
personModal.create({
    name: '谢霆锋',
    age: 40,
    sex: '男',
    chat: '1990haha'
}, (err) => {
    if (!err) {
        console.log('插入成功')
    } else {
        throw err;
    }
});
personModal.create({
    name: '王菲',
    age: 39,
    sex: '女',
    chat: 'aaaaa'
}, (err) => {
    if (!err) {
        console.log('插入成功')
    } else {
        throw err;
    }
});