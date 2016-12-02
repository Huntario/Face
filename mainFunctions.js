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
    models.users.sync();
    models.userPicData.sync();
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
addUserPicTable: function (user){
  var tableName = "UserPicTable_" + user;
  queryInterface.createTable(
  tableName,
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    picPath: {
      type: Sequelize.DATE
    },
    anger: {
      type: Sequelize.BOOLEAN
    },
    angerConfidence: {
      type: Sequelize.DATE
    },
    disgust: {
      type: Sequelize.BOOLEAN
    },
    disgustConfidence: {
      type: Sequelize.INTEGER
    },
    fear: {
      type: Sequelize.BOOLEAN
    },
    fearConfidence: {
      type: Sequelize.INTEGER
    },
    happiness: {
      type: Sequelize.BOOLEAN
    },
    happinessConfidence: {
      type: Sequelize.INTEGER
    },
    sadness: {
      type: Sequelize.BOOLEAN
    },
    sadnessConfidence: {
      type: Sequelize.INTEGER
    },
    surprise: {
      type: Sequelize.BOOLEAN
    },
    surpriseConfidence: {
      type: Sequelize.INTEGER
    }
  },
  {
    engine: 'MYISAM',                     // default: 'InnoDB'
    charset: 'latin1',                    // default: null
    schema: 'public'                      // default: public, PostgreSQL only.
  }
  )
  },
createNewUser: function (username, link){
  sequelize
  .sync({
    force: true
  })
  .then(function() {
    User.create({
      link: link,
      username: username,
    })
  })
  },
createNewPicInfo: function (userPics,picLink,date,age_est,anger,disgust,fear,happiness,sadness,surprise){
  sequelize
  .sync({
      force: true
  })
  .then(function() {
    UserPicData.create({
      userPics:userPics,
      picLink:picLink,
      date:date,
      age_est:age_est,
      anger:anger,
      disgust:disgust,
      fear:fear,
      happiness:happiness,
      sadness:sadness,
      surprise:surprise
      })
    });
  },
learnFace: function (name, urls) {
    client.faces.detect({ urls: urls, attributes: 'all' })
    .then(function(result){
        var nameString = String(name);
        var newLearn = JSON.parse(result);
        var newTid = newLearn.photos[0].tags[0].tid;
        var fullNameSpace = name + '@peter';
        client.tags.save(newTid, fullNameSpace, {label: nameString, password: 'optionalPassword'});
        client.faces.train(nameString, { namespace: 'peter' });
        })
    },
recognizeFace: function (name) {
  var picPath = testVars.garryB;
  var fullNameSpace = name + '@peter';
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
  if(!recognizeFace){
    return console.log("Recognition process failed. var recognizeFace is undefined");
    };
  if(recognizeFace === true){
    createNewPicInfo();
    };
  },
  };

module.exports = mainFuncs;