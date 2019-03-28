//进入it_666数据库
//use it_666
db
//创建college集合，插入6个文档
db.colleges.insert([
{name:"HTML"},
{name:"JAVA"},
{name:"PHP"},
{name:"JS"},
{name:"CSS"},
{name:"HTML5"}
])
db.colleges.find()
//查询集合中文档的数量
db.colleges.find().count();
//查询name为html的文档
db.colleges.find({name:"HTML"});
//增加字段
db.colleges.update({name:"HTML"},{$set:{intro:"全站"}})
//替换字段
db.colleges.update({name:"HTML"},{$set:{name:"大数据"}})
//删除字段
db.colleges.update({name:"大数据"},{$unset:{intro:"1"}})
//内嵌文档
db.colleges.update({name:"大数据"},{$set:{classes:{base:["h5+c3","jQuery","abc"]}}})
//查询内嵌
db.colleges.find({"classes.base":"h5+c3"});
//追加课程:push直接添加，，addToSet确认原数据中没有才添加：
db.colleges.update({name:"大数据"},{$push:{"classes.base":"小程序"}})
db.colleges.update({name:"大数据"},{$addToSet:{"classes.base":"大程序"}})
//删除数组中的一个值：pop,他接受的是一个数字.
db.colleges.update({name:"大数据"},{$pop:{"classes.base":1}})
db.colleges.update({name:"大数据"},{$pull:{"classes.base":"abc"}})
//删除集合
db.colleges.remove({})
db.colleges.drop()
// 插入一万条数据
var arr = [];
for(var i = 0;i<10000;i++){
    arr.push({count:i});
    };
db.demos.insert(arr);
db.demos.find();
// 找到count数量为666的
db.demos.find({count:666})
// 小于666
db.demos.find({count:{$lt:666}})
// 大于666
db.demos.find({count:{$gt:666}})
// 大于66，小于666
db.demos.find({count:{$gt:66,$lt:666}})
// 前十条数据
db.demos.find().limit(10);
// 查看demos中11-20的数据=>分页器
db.demos.find().skip(10).limit(10)
