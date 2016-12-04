var express = require('express');
  var appKeys = require('./keys.js');
  var users = require('./routes/users');
  var profile = require('./routes/profile');
  var main = require('./routes/main');
  var testVars = require('./testVars.js');
  var skybiometry = require('skybiometry');
  var models = require('./models');
  var User = require('./models')['users'];
  var UserPicData = require('./models')['userPicData'];
  const client = new skybiometry.Client(appKeys.key1, appKeys.key2);
  var bodyParser = require('body-parser');
  var app = express();
  var Sequelize = require('sequelize');
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
  app.use(express.static('public'));
  app.use('/', main);
  app.use('/users', users);
  app.use('/profile', profile);
  var sequelize = new Sequelize('mysql://root@localhost:3306/facesDB');
  var Users = sequelize.define;
var mainFuncs = {
  routerConsole: function(){
    console.log('This is routerConsole: ' + users);
  },
  startServer: function () {
    app.listen(3000, function() {
      models.users.sync({ force: false });
      models.userPicData.sync({ force: false });
      console.log('Listening on port 3000!');
      });
    },
  sqlConnectionCheck: function (){
    sequelize
    .authenticate()
    .then(function(err) {
      console.log('Connection to mysql: success.');
    })
    .catch(function (err) {
      console.log('Connection to mysql: failed with these errors: ', err);
    });
    },
  nameCheck: function (username){
    return User.findAll({
      where: {
        username: username
        }
      })
    },
  newUser: function (username, picPath){
    this.username = username;
    this.picPath = picPath;
    },
  userWritePicFile: function(username, picBase64) {
    var userPicFilePath = "./public/pics/" + username + ".png";
    require("fs").writeFile(userPicFilePath, picBase64, 'base64', function(err) {});
    return userPicFilePath;
    },
  createNewUserDBRow: function(username,userPicFilePath){
    sequelize
    User.create({
        username: username,
        link: picFilePath
      });
    },
  createNewPicInfo: function (username,picPath,anger,angerConfidence,disgust,disgustConfidence,fear,fearConfidence,happiness,happinessConfidence,sadness,sadnessConfidence,surprise,surpriseConfidence){
    sequelize
    .sync({
        force: false
    })
    .then(function(result) {
        UserPicData.create({
        username:result.username,
        picpath:result.picPath,
        anger:result.anger,
        angerConfidence:result.angerConfidence,
        disgust:result.disgust,
        disgustConfidence:result.disgustConfidence,
        fear:result.fear,
        fearConfidence:result.fearConfidence,
        happiness:result.happiness,
        happinessConfidence:result.happinessConfidence,
        sadness:result.sadness,
        sadnessConfidence:result.sadnessConfidence,
        surprise:result.surprise,
        surpriseConfidence:result.surpriseConfidence
        })
      });
    },
  learnFace: function (username, picPath) {
      client.faces.detect({ urls: picPath, attributes: 'all' })
      .then(function(result){
          var nameString = String(username);
          var newLearn = JSON.parse(result);
          var newTid = newLearn.photos[0].tags[0].tid;
          var fullNameSpace = username + '@urface';
          console.log('You have been registered with the name: ' + username);
          client.tags.save(newTid, fullNameSpace, {label: nameString, password: 'optionalPassword'});
          client.faces.train(nameString, { namespace: 'urface' });
          })
      },
  recognizeFace: function (username, picPath) {
    var fullNameSpace = username + '@urface';
    client.faces.recognize(fullNameSpace, { urls: picPath, attributes: 'all' })
      .then(function(result){
          var newData = JSON.parse(result);
          //console.log(newData);
          var user = newData.photos[0].tags[0].uids[0];
          console.log(user);
          var confidence = user.confidence;
          console.log(user.confidence);

          if (user && user.confidence > 45){
                var recognized = true;
                console.log('This looks like a match. Were: ' + confidence + '% confident.');
            } else {
                var recognized = false;
                console.log('This is not a match. Were: ' + confidence + '% confident.');
            };
        })
    },
  authenticateFace: function (){
    recognizeFace();
    if(!recognized){
      return console.log("Recognition process failed. var recognizeFace is undefined");
      };
    if(recognized === true){
      createNewPicInfo();
      };
    },
  learnFace: function (username, picPath) {
      client.faces.detect({ urls: picPath, attributes: 'all' })
      .then(function(result){
          var nameString = String(username);
          var newLearn = JSON.parse(result);
          var newTid = newLearn.photos[0].tags[0].tid;
          var fullNameSpace = username + '@urface';
          console.log('You have been registered with the name: ' + username);
          client.tags.save(newTid, fullNameSpace, {label: nameString, password: 'optionalPassword'});
          client.faces.train(nameString, { namespace: 'urface' });
          })
      },
  recognizeFace: function (username, picPath) {
    var fullNameSpace = username + '@urface';
    client.faces.recognize(fullNameSpace, { urls: picPath, attributes: 'all' })
      .then(function(result){
          var newData = JSON.parse(result);
          //console.log(newData);
          var user = newData.photos[0].tags[0].uids[0];
          console.log(user);
          var confidence = user.confidence;
          console.log(user.confidence);

          if (user && user.confidence > 45){
                var recognized = true;
                console.log('This looks like a match. Were: ' + confidence + '% confident.');
            } else {
                var recognized = false;
                console.log('This is not a match. Were: ' + confidence + '% confident.');
            };
        })
      }
    };
module.exports = mainFuncs;