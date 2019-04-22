const mongodb = require('mongodb');
// làm việc để kết nối tới mongodb 
const MongoClient = mongodb.MongoClient;
var database = new Object();
//thêm user
database.insertUser = function (_user) {
    //kết nối database
    const url = 'mongodb://localhost:27017/';
    //kiểm tra kết nối database và tạo database, mở và sử dụng database
    MongoClient.connect(url,{ useNewUrlParser: true },function(err,client){
        if (err) {
            throw err;
            console.log('loi khong biet.ERROR: ', err);
        } else {        
            console.log('Da kết nối database');
            //thay đổi từ phiên bản mongoDB 3.0 dành cho nodejs
            var db = client.db('woto_database');
            const userdb = db.collection('users');
            userdb.insertOne(_user, function(err,result){
                if (err){
                    console.log('loi chèn nguoi dung: ', err);
                } else {
                    console.log('chen nguoi dung thanh cong');
                }});
            client.close();
            }
        });
    }
database.insertProvider = function (_provider) {
    const url = 'mongodb://localhost:27017/';
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err,client){
        if (err) {
            throw err;
            console.log('loi khong biet.ERROR: ', err);
        } else {        
            console.log('Da kết nối database');
            var db = client.db('woto_database');
            const providerdb = db.collection('provider');
            providerdb.insertone(_provider , function(err,result){
                if (err){
                    console.log('loi chèn nhà cung cấp: ', err);
                } else {
                    console.log('chen nhà cung cấp thanh cong');
                }});
            client.close();
            }
        });
    }  
database.insertProduct = function (_product) {
    const url = 'mongodb://localhost:27017/';
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err,client){
        if (err) {
            throw err;
            console.log('loi khong biet.ERROR: ', err);
        } else {        
            console.log('Da kết nối database');
            var db = client.db('woto_database');
            const productdb = db.collection('product');
            userdb.insertOne(_product , function(err,result){
                if (err){
                    console.log('loi chèn sản phẩm: ', err);
                } else {
                    console.log('chen nhà sản phẩm thành công');
                }});
            client.close();
            }
        });
    } 
database.insertTran = function (_tran) {
    const url = 'mongodb://localhost:27017/';
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err,client){
        if (err) {
            throw err;
            console.log('loi khong biet.ERROR: ', err);
        } else {        
            console.log('Da kết nối database');
            var db = client.db('woto_database');
            const trandb = db.collection('tran');
            tran.insertOne(_tran , function(err,result){
                if (err){
                    console.log('loi chèn giao dich: ', err);
                } else {
                    console.log('chen giao dich thành công');
                }});
            client.close();
            }
        });
    } 

module.exports = database