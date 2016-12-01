var hideVars = "hide variables";
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
  var newAccount = false;
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/', main);
  app.use('/users', users);
  app.use('/profile', profile);
  var sequelize = new Sequelize('mysql://root@localhost:3306/facesDB');
  var Users = sequelize.define
// function addUserPicTable(user){
//   var tableName = "UserPicTable_" + user;
//   queryInterface.createTable(
//   tableName,
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     username: {
//       type: Sequelize.STRING
//     },
//     date: {
//       type: Sequelize.DATE
//     },
//     picPath: {
//       type: Sequelize.DATE
//     },
//     anger: {
//       type: Sequelize.BOOLEAN
//     },
//     angerConfidence: {
//       type: Sequelize.DATE
//     },
//     disgust: {
//       type: Sequelize.BOOLEAN
//     },
//     disgustConfidence: {
//       type: Sequelize.INTEGER
//     },
//     fear: {
//       type: Sequelize.BOOLEAN
//     },
//     fearConfidence: {
//       type: Sequelize.INTEGER
//     },
//     happiness: {
//       type: Sequelize.BOOLEAN
//     },
//     happinessConfidence: {
//       type: Sequelize.INTEGER
//     },
//     sadness: {
//       type: Sequelize.BOOLEAN
//     },
//     sadnessConfidence: {
//       type: Sequelize.INTEGER
//     },
//     surprise: {
//       type: Sequelize.BOOLEAN
//     },
//     surpriseConfidence: {
//       type: Sequelize.INTEGER
//     }
//   },
//   {
//     engine: 'MYISAM',                     // default: 'InnoDB'
//     charset: 'latin1',                    // default: null
//     schema: 'public'                      // default: public, PostgreSQL only.
//   }
//   )
//   };
function sqlConnectionCheck(){
  sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection to mysql: success.');
  })
  .catch(function (err) {
    console.log('Connection to mysql: failed with these errors: ', err);
  });
  };
function createNewUser(username, link, date){
  sequelize
  .sync({
    force: true
  })
  .then(function() {
    User.create({
      link: link,
      username: username,
      date: date
    })
  })
  };
function createNewPicInfo(userPics,picLink,date,age_est,anger,disgust,fear,happiness,sadness,surprise){
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
  };
function startServer() {
  app.listen(3000, function() {
    models.users.sync();
    models.userPicData.sync();
    console.log('Listening on port 3000!');
    });
  };
function learnFace(name) {
    client.faces.detect({ urls: testVars.garryB, attributes: 'all' })
    .then(function(result){
        var nameString = String(name);
        var newLearn = JSON.parse(result);
        var newTid = newLearn.photos[0].tags[0].tid;
        var fullNameSpace = name + '@peter';
        client.tags.save(newTid, fullNameSpace, {label: nameString, password: 'optionalPassword'});
        client.faces.train(nameString, { namespace: 'peter' });
        })
    };
function nameCheck(name){
  //If the name is in the database, tell the user to try another.
  // SELECT * FROM post WHERE authorId = 2
  sequelize
  .sync({
    force: true
  })
  .then(function(){
  Post.findAll({
  where: {
    authorId: 12,
    status: 'active'
      }
    });
  });
};

function recognizeFace(name) {
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
  };
function authenticateFace(){
  recognizeFace();
  if(!recognizeFace){
    return console.log("Recognition process failed. var recognizeFace is undefined");
    };
  if(recognizeFace === true){
  createNewPicInfo();
  };
};
startServer();
sqlConnectionCheck();
  if (newAccount === true){
  learnFace();
  //var newUserInfo = [username, link, date];
  createNewUser();
  }else{
  //var newPicInfo = [userPics,picLink,date,age_est,anger,disgust,fear,happiness,sadness,surprise]
  createNewPicInfo()
  };