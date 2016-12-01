var express = require('express');
var router = express.Router();
var tableData = require('../data/table-data.js');
var bodyParser = require('body-parser');
var app = express();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var appKeys = require('../keys.js');
var skybiometry = require('skybiometry');
const client = new skybiometry.Client(appKeys.key1, appKeys.key2);
router.post('/login', function(req,res){
	res.send("Hi hi Hiya");
	});

module.exports = router;








