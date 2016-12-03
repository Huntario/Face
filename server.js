var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var appKeys = require('./keys.js').appKeys;
var users = require('./routes/user_routes.js');
var main = require('./routes/main');
var testVars = require('./testVars.js');
var skybiometry = require('skybiometry');
var User = require('./models')['users'];
const client = new skybiometry.Client(appKeys.key1, appKeys.key2);
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener


var models  = require('./models');
// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize
// creates table
sequelizeConnection.sync({force:false,  // disable logging; default: console.log
  logging: false});

app.use('/users', users);
app.use('/', main);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var apis = require('./routes/user_routes.js');
app.use('/', apis);
// require('./routes/user_routes.js')(app); 
module.exports = app;

function startServer(){
    app.listen(PORT, function() {
    // User.sync(); // creates a users table
    console.log('Listening on port '+PORT+'!');
    });
}

function learnFace(name) {
    client.faces.detect({ urls: testVars.garryB, attributes: 'all' })
    .then(function(result){
        var nameString = String(name);
        var newLearn = JSON.parse(result);
        var newTid = newLearn.photos[0].tags[0].tid;
        console.log(newTid);
        var fullNameSpace = name + '@raj';
        client.tags.save(newTid, fullNameSpace, {label: nameString, password: 'optionalPassword'});
        client.faces.train(nameString, { namespace: 'raj' });
    })
};

function recognizeFace(name) {
    var fullNameSpace = name + '@raj';
    client.faces.recognize(fullNameSpace, { urls: testVars.garryB, attributes: 'all' })
    .then(function(result) {
        var newData = JSON.parse(result);
        var user = newData.photos[0].tags[0];
        console.log(user);
        var confidence = user.uids[0].confidence;
        if (confidence > 40) {
            console.log('This looks like a match. Were: ' + confidence + ' confident.');
        } else {
            console.log('This is not a match. Were: ' + confidence + ' confident.');
        }
    });
}

startServer();
// learnFace('gary');
// recognizeFace('gary');