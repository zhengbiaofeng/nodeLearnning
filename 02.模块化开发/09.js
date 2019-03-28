let fs = require('fs');

let rs = fs.createReadStream('C:\\Users\\user\\Desktop/自拍.jpg');
let ws = fs.createWriteStream('自拍.jpg');

rs.pipe(ws);