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

function User (username, picPath){
	//uniqueID
	this.username = username;
	this.picPath = picPath;
	//this.uID = uID;
};

router.post('/create', function(req,res){
	var obj = {};
	var user = new User(userName, userPicFilePath);
	var userName = req.body.username;
	var userPicFilePath = "./pics/" + req.body.username + ".png";
	res.send(req.body);
	client.account.users('peter')
		.then(function (result){
			var usersTest = JSON.parse(result);
			var userArray = usersTest.users.peter;
			var convertUsername = userName+ "@peter";
			for (var i=0; i<userArray.length; i++){
				if (convertUsername === userArray[i]){
					console.log('this user already exists!');
				}else{
					require("fs").writeFile(userPicFilePath, req.body.pic, 'base64', function(err) {
						});
				}
			};
		  });
	});

module.exports = router;








