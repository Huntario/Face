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
  var mainFuncs = require('../mainFunctions.js');
function User (userName, picPath){
	this.username = userName;
	this.picPath = picPath;
	};
function queryReturn(table){
  if (table === null){
  	console.log('Cool name!');
  	var newAccount = true;
  	return newAccount;
  }
  if (table){
  	console.log('Looks like this name is taken.');
  	var newAccount = false;
  	return newAccount;
  }
  };
function nameCheck (name){
  //If the name is in the database, tell the user to try another.
  // SELECT * FROM post WHERE authorId = 2
  sequelize
  .sync({
    force: true
  })
  .then(function(){
    User.findAll({
      where: {
        username: name
        }
      });
    queryReturn(table)
    });
  };
router.post('/create', function(req,res){
	var obj = {};
	console.log(req.body.username);
	var userName = req.body.userName;
	var userPicFilePath = "./pics/" + req.body.userName + ".png";
	var user = new User(userName, userPicFilePath);
	res.send(req.body);
	client.account.users(userName)
	.then(function (result){
			var usersTest = JSON.parse(result);
			console.log(result);
			namecheck(userTest)
			.done(function (result){
			if (newAccount === true){
				require("fs").writeFile(userPicFilePath, req.body.pic, 'base64', function(err) {
						});
			}});
			mainFuncs.createNewUser(userName,userPicFilePath);
			});
		});
module.exports = router;