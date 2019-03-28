// 1、 引入模块
let mongoose = require('mongoose');

// 2、 和数据库建立连接
mongoose.connect('mongodb://localhost/m_data', { useNewUrlParser: true });

// 3、 监听各种状态
let db = mongoose.connection;
db.once('open', () => {
    console.log('连接成功');
})

// 4、 创建对象规范
let Schema = mongoose.Schema;

let personSchema = new Schema({
    name: String,
    age: Number,
    sex: {
        type: String,
        default: "男"
    },
    chat: String
});

// 5、 创建model对象。这个类似于集合
let personModel = mongoose.model('person', personSchema);

// 6、 集合中增加数据--文档
// personModel.create([
//     { name: '刘德华', age: 50, sex: '男', chat: 'wangqingshui' },
//     { name: '张曼玉', age: 34, sex: '女', chat: 'zhangmanyu' },
//     { name: '李小龙', age: 37, sex: '男', chat: 'chinakungfu' },
//     { name: '周星驰', age: 48, sex: '男', chat: 'xingye' },
//     { name: '成龙', age: 40, sex: '男', chat: 'jiangchagushi' }
// ], (err) => {
//     if (!err) {
//         console.log('插入成功')
//     } else {
//         throw err;
//     }
// });

// 7、 查找数据
// 全部
// personModel.find({},(err,docs)=>{
//     if(!err){
//         console.log(docs);
//         console.log(typeof docs);
//     }
// });
// 指定
// personModel.find({ name: '周星驰' }, (err, docs) => {
//     if (!err) {
//         console.log(docs);
//         console.log(typeof docs);
//     }
// })

// 指定什么显示什么不显示,两种写法：对象和字符串
// personModel.find({}, { name: 1, _id: 0 }, (err, docs) => {
//     if (!err) {
//         console.log(docs);
//         console.log(typeof docs);
//     } else {
//         throw err;
//     }
// });
// personModel.find({}, '-_id name sex', { skip: 2, limit: 3 }, (err, docs) => {
//     if (!err) {
//         console.log(docs);
//         console.log(typeof docs);
//     } else {
//         throw err;
//     }
// })

// 8、 修改数据
// personModel.update({ name: '刘德华' }, { $set: { age: 18 } }, { multi: true }, (err) => {
//     if (!err) {
//         console.log('修改成功');
//     } else {
//         throw err;
//     }
// })

// 9、 删除数据，remove和delete
// personModel.remove({ name: '周星驰' }, (err) => {
//     if (!err) {
//         console.log('删除成功');

//     }
// })

// 10、 统计个数
personModel.countDocuments({}, (err, count) => {
    if (!err) {
        console.log(count);
    }
})

// 11、 上面是在集合里面添加文档，现在我们先创建文档，再把它塞入集合
let person = new personModel({ name: '周星驰', age: 48, sex: '男', chat: 'xingye' });
person.save((err, product) => {
    if (!err) {
        console.log('插入成功');
    }
})