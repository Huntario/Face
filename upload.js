var express =   require("express");
var multer  =   require('multer');
var app         =   express();
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage}).single('userPhoto');
app.post('/api/photo',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
})


















// var http = require('http')
//   , fs = require('fs')
//   , options

// options = {
//     host: 'localhost'
//   , port: 3000
//   , path: '/images/logos/ps_logo2.png'
// }

// var request = http.get(options, function(res){
//     var imagedata = ''
//     res.setEncoding('binary')
//     res.on('data', function(chunk){
//         imagedata += chunk
//     })
//     res.on('end', function(){
//         fs.writeFile('logo.png', imagedata, 'binary', function(err){
//             if (err) throw err
//             console.log('File saved.')
//         })
//     })

// })