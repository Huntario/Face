var express = require('express');
var appKeys = require('./keys.js');
var User = require('./models')['users'];
var routes = require('./controllers/routes.js')['routes'];
var testVars = require('./testVars.js');
var skybiometry = require('skybiometry');
var app = express();
const client = new skybiometry.Client(appKeys.key1, appKeys.key2);

function startServer(){
  app.use(express.static('public'));
  app.listen(3000, function() {
  User.sync(); // creates a characters table
  console.log('Example app listening on port 3000!');
  });
 }
function learnFace(name) {
    console.log(name);
    client.faces.detect({ urls: testVars.garryB, attributes: 'all' })
    .then(function(result){
        var nameString = String(name);
        var newLearn = JSON.parse(result);
        var newPID = newLearn.photos[0].pid;
        var fullNameSpace = nameString + '@peter';
        client.tags.save(newPID, fullNameSpace, {label: nameString, password: 'optionalPassword'});
        client.faces.train(name, { namespace: 'peter' });
        })
    };
function recognizeFace() {
    client.faces.recognize('all@peter', { urls: testVars.garryB, attributes: 'all' })
    .then(function(result) {
        var newData = JSON.parse(result);
        var user = newData.photos[0].tags[0].uids[0].uid;
        var confidence = newData.photos[0].tags[0].uids[0].confidence;
        if (confidence > 40) {
            console.log('This looks like a match. Were: ' + confidence + ' confident.');
        } else {
            console.log('This is not a match. Were: ' + confidence + ' confident.');
        }
  });}

startServer();
learnFace('gary');
recognizeFace();