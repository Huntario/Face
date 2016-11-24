var express = require('express');
var router = express.Router();
var tableData = require('../data/table-data.js');
var bodyParser = require('body-parser');
var app = express();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });
var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.post('/add', function(req,res){
	res.send("Hey, it's atleast getting to the route....")
 console.log(req.body)
	});
module.exports = router;








