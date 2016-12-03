  var Sequelize = require('sequelize');
  var sequelize = new Sequelize('mysql://root@localhost:3306/facesDB');
  var Users = sequelize.define;
  var mainFuncs = require('./mainFunctions.js');
mainFuncs.startServer();
// mainFuncs.sqlConnectionCheck();
// mainFuncs.createNewUser();

//var newUserInfo = [username, link, date];
// }else if(newAccount === false){

// var newPicInfo = ['username','picPath','anger','disgust','disgustConfidence','fear','fearConfidence','happiness','happinessConfidence','sadness','sadnessConfidence','surprise','surpriseConfidence'];

// mainFuncs.createNewPicInfo('username','picPath','anger','disgust','disgustConfidence','fear','fearConfidence','happiness','happinessConfidence','sadness','sadnessConfidence','surprise','surpriseConfidence');

// mainFuncs.learnFace('Leachmanh','./pics/Leachmanh');