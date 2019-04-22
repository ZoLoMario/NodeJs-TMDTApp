//khai báo sử dụng express
const express = require('express');
const app = express();//biến lưu trữ thông tin app

const database = require('./core/database.js');
const router = require('./router/index.js');
//cài đặt một số thông số nhất định
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)
app.use('/',router);
//hoạt động server tại cổng 3000
app.listen(3000,function() {
           console.log('May chu NODEJS da chay tai PORT 3000');
           }
          );