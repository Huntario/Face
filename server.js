var express = require('express');
var appKeys = require('./keys.js');
var app = express();
var User = require("./models")["users"];
var routes = require("./controllers/routes.js");

User.sync(); // creates a characters table
//var bodyParser = require('body-parser');
var angelina = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSjvJPGgDjpY42mL4oDMU9iv9DaTaKFlZfI0v7SwqsN4gUlMCdu';
var markRuff =  'https://upload.wikimedia.org/wikipedia/commons/2/21/MarkRuffalo07TIFF.jpg'
const skybiometry = require('skybiometry');
const client = new skybiometry.Client(appKeys.key1, appKeys.key2);
client.faces.detect({urls: angelina, attributes: 'all'});
//result.photos[0].tags[0].uids[0].uid
//client.tags.save('F@0a80c0124c2cfa52301d87fb7010f206_e4f338a14c3f5', 'mark@peter', {label: 'Mark', password: 'optionalPassword'});
client.faces.train('mark', {namespace: 'peter'});
client.faces.recognize('all@peter', {urls: angelina, attributes: 'all'}).then(function (result) {
    "use strict";
    console.log(result);
    var newData = JSON.parse(result);
    console.log(newData.photos[0].tags[0].uids[0].uid);
    console.log(newData.photos[0].tags[0].uids[0].confidence);
    var user = newData.photos[0].tags[0].uids[0].uid;
    var confidence = newData.photos[0].tags[0].uids[0].confidence;
    if (confidence > 40) {
        console.log("This looks like a match. We're: " + confidence + " confident.");
    } else {
        console.log("This is not a match.");
    }
});
app.listen(3000, function () {
    "use strict";
    console.log('Example app listening on port 3000!');
});
// // parse urlencoded request bodies into req.body
// app.use(bodyParser.urlencoded({extended: false}));