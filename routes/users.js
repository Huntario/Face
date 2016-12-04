var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

router.post('/create', function(req,res){
  username = req.body.username;
  picBase64 = req.body.pic;

  });
module.exports = router;