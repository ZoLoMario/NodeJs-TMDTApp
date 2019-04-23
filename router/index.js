const express = require('express')
const router = express.Router()
    //trình phân tích body
const bodyParser = require('body-parser')
const fs = require('fs')
const util = require('util');
const CirJSON = require('circular-json');
const path = require('path').resolve(__dirname,'..')
    //thêm database
const database = require ('../core/database.js');
    //dùng trình phân tích form
const formidable = require('formidable');
    //sử dụng mã hóa url
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
const patha = require('path').resolve(__dirname,'..','log')
router.route('/user')
    .get(function(req, res){
            res.render('add_user.html');
            try {
                fs.appendFileSync(patha + '/data-res.txt',CirJSON.stringify(res),{flags:'a',encoding:'utf-8'})
            } catch (err) {
                console.log('Lỗi ghi file GET '+ err);
            }
            console.log('ghi log GET thanh cong');
        })
    .post(function(req,res){
            try {
                fs.appendFileSync(patha + '/data-req.txt',CirJSON.stringify(req),{flags:'a',encoding:'utf-8'})
            } catch (err) {
                console.log('Lỗi ghi file POST '+ err);
                }
            console.log('ghi log POST thanh cong');
            database.insertUser({
                name:req.body.user.name,
                date_birday:req.body.user.datebirday,
                mail:req.body.useremail,
                });
            res.render('add_user.html');
            console.log(req.body.user.name)
            });
router.route('/provider')
    .get(function(req,res){
        //res.send(CirJSON.stringify(res))
        //res.send(req)
            res.render('add_provider.html');
                    })
    .post(function(req,res){
    try {
        fs.appendFileSync(path+'/data-req.txt',
                          CirJSON.stringify(req),
                          {flags:'a',encoding:'utf-8'}
                          )}
    catch (err){
        console.log('loi ghi file POST tạo provider: '+ err);
        }
    console.log('kiem tra file log');
    var form = new formidable.IncomingForm(),
        file = [],
        field = [];
        //sự kiện khi file bắt đầu upload sử dụng tạo hàm hàm on()
    form.on('fileBegin',function(name,file){
        file.path = path + '/uploads/' + file.name;
        console.log('Bắt đầu upload file');
        })
    form.on('file',function(name, file){
        console.log('Uploaded ', file , name);
        })
    form.on('end',function(){
        console.log('da ket thuc');
        })
    form.on('field',function(name,field){
        console.log('truong ten :',name);
        })
    console.log(form.eventNames());
    //console.log(file);
    
    //trình phân tích cú pháp
    form.parse(req,function(err,fields,files){
        var oldpath = files.provider.image.path;
        console.log('oldpath ' + oldpath);
        console.log('fields');
        console.log('files');
        console.log('hello');
        var newpath = path + '/uploads/' + files.name
        form.emit('file ',files.file.size,files.file.name);
        fs.rename(oldpath,newpath,function(err){
            if(err) throw err;
            });
        });
    //console.log(form);
   
    res.send(req.body);
    return;
    })
module.exports = router