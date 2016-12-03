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
startServer: function () {
  app.listen(3000, function() {
    models.users.sync({ force: true });
    models.userPicData.sync({ force: true });
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
createNewUser: function(username,link){
  sequelize
  User.create({
      username: username,
      link: link
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
learnFace: function (username, urls) {
    client.faces.detect({ urls: urls, attributes: 'all' })
    .then(function(result){
        var nameString = String(username);
        var newLearn = JSON.parse(result);
        var newTid = newLearn.photos[0].tags[0].tid;
        var fullNameSpace = username + '@peter';
        console.log('fullNameSpace' + fullNameSpace);
        client.tags.save(newTid, fullNameSpace, {label: nameString, password: 'optionalPassword'});
        client.faces.train(nameString, { namespace: 'peter' });
        })
    },
recognizeFace: function (username) {
  var picPath = testVars.garryB;
  var fullNameSpace = username + '@peter';
  console.log('fullNameSpace' + fullNameSpace);
  client.faces.recognize(fullNameSpace, { urls: picPath, attributes: 'all' })
    .then(function(result){
        var newData = JSON.parse(result);
        var user = newData.photos[0].tags[0];
        var confidence = user.uids[0].confidence;
          if (confidence > 40) {
            var recognized = true;
            return console.log('This looks like a match. Were: ' + confidence + ' confident.');
          } else {
            var recognized = false;
            return console.log('This is not a match. Were: ' + confidence + ' confident.');
          }
      });
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
  };

module.exports = mainFuncs;