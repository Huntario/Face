var express = require('express');
var appKeys = require('./keys.js');
var User = require('./models')['users'];
var routes = require('./controllers/routes.js')['routes'];
var testVars = require('./testVars.js');
var skybiometry = require('skybiometry');
var app = express();
const client = new skybiometry.Client(appKeys.key1, appKeys.key2);

startServer();
learnFace();
recognizeFace();

function startServer(){
  app.use(express.static('public'));
  app.listen(3000, function() {
  'use strict';
  console.log('Example app listening on port 3000!');
  });
 }
function learnFace() {
    //User.sync(); // creates a characters table
    client.faces.detect({ urls: testVars.angelina, attributes: 'all' })
    .then(result => console.log(JSON.parse(result)));
    client.tags.save('F@0a80c0124c2cfa52301d87fb7010f206_e4f338a14c3f5', 'mark@peter', {label: 'Mark', password: 'optionalPassword'});
    client.faces.train('mark', { namespace: 'peter' });}
function recognizeFace() {
    client.faces.recognize('all@peter', { urls: testVars.angelina, attributes: 'all' })
    .then(function(result) {
        'use strict';
        //console.log(result);
        var newData = JSON.parse(result);
        //console.log(newData.photos[0].tags[0].uids[0].uid);
        //console.log(newData.photos[0].tags[0].uids[0].confidence);
        var user = newData.photos[0].tags[0].uids[0].uid;
        var confidence = newData.photos[0].tags[0].uids[0].confidence;
        if (confidence > 40) {
            console.log('This looks like a match. Were: ' + confidence + ' confident.');
        } else {
            console.log('This is not a match.');
        }
  });}

