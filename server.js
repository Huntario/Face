var express = require('express');
var appKeys = require('./keys.js');
var User = require('./models')['users'];
var routes = require('./controllers/routes.js')['routes'];
var testVars = require('./testVars.js');
var skybiometry = require('skybiometry');
var app = express();
const client = new skybiometry.Client(appKeys.key1, appKeys.key2);
var bodyParser = require('body-parser');


function startServer(){
  app.listen(3000, function() {
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  User.sync(); // creates a users table
  console.log('Example app listening on port 3000!');
  });
 }
function learnFace(name) {
    console.log(name);
    client.faces.detect({ urls: testVars.garryB, attributes: 'all' })
    .then(function(result){
        var nameString = String(name);
        var newLearn = JSON.parse(result);
        var newTid = newLearn.photos[0].tags[0].tid;
        console.log(newTid);
        var fullNameSpace = name + '@peter';
        client.tags.save(newTid, fullNameSpace, {label: nameString, password: 'optionalPassword'});
        client.faces.train(nameString, { namespace: 'peter' });
        })
    };
function recognizeFace(name) {
    var fullNameSpace = name + '@peter';
    client.faces.recognize(fullNameSpace, { urls: testVars.garryB, attributes: 'all' })
    .then(function(result) {
        var newData = JSON.parse(result);
        console.log(newData.photos[0].tags[0]);
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
recognizeFace('gary');