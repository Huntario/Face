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
  var Sequelize = require('sequelize');
  var sequelize = new Sequelize('mysql://root@localhost:3306/facesDB');
  var Users = sequelize.define;
  var User = require('../models')['users'];
  var mainFuncs = require('../mainFunctions.js');

function newUser (username, picPath){
	this.username = username;
	this.picPath = picPath;
	};
function nameCheck (username){
  return User.findAll({
    where: {
      username: username
      }
    })
  };
function createNewUser (username,link){
  sequelize
  User.create({
      username: username,
      link: link
    });
  };
router.post('/create', function(req,res){
	var obj = {};
	console.log(req.body.username);
	var username = req.body.username;
	var userPicFilePath = "./public/pics/" + req.body.username + ".png";
	var user = new newUser(username, userPicFilePath);
	//client.account.users(username)
  //res.send(req.body)
		nameCheck(username).then(function(result){
      console.log(result);
      if(result.length > 0){
        console.log("It appears this user already exists. Please try another username.")
      }else{
        require("fs").writeFile(userPicFilePath, req.body.pic, 'base64', function(err) {});
        //mainFuncs.createNewUser(username,userPicFilePath);
      }
    });
  });
module.exports = router;