var express = require('express');
var router = express.Router();
var tableData = require('../data/table-data.js');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/', function (req, res) {
    res.send('index.html');
});
router.get('/:user', function (req, res) {
	//need a route to redirect user to their own profile
    res.result;
});
router.post('/post', urlencodedParser,function(req,res){
   if (!req.body) return res.sendStatus(400)
   console.log(req.body);
});
module.exports = router;