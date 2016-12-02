  var Sequelize = require('sequelize');
  var sequelize = new Sequelize('mysql://root@localhost:3306/facesDB');
  var Users = sequelize.define;
  var mainFuncs = require('./mainFunctions.js');
mainFuncs.startServer();
mainFuncs.sqlConnectionCheck();
// mainFuncs.learnFace();
//   //var newUserInfo = [username, link, date];
//   mainFuncs.createNewUser();
//   }else if(newAccount === false){
//   //var newPicInfo = [userPics,picLink,date,age_est,anger,disgust,fear,happiness,sadness,surprise]
//   mainFuncs.createNewPicInfo()
//   };