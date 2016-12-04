var express = require('express');
var mainVars = require('./mainVars.js')
var mainFuncs = require('./mainFunctions.js');
var skybiometry = require('skybiometry');
var appKeys = require('./keys.js');
const client = new skybiometry.Client(appKeys.key1, appKeys.key2);
var username = "hunter";

mainFuncs.startServer();
mainFuncs.sqlConnectionCheck();
mainFuncs.nameCheck(username)
  .then(function(result){
  	console.log('This was the result of nameCheck: ' + result);
  if (result == '' && picBase64 && username){
        mainFuncs.userWritePicFile(username, picBase64);
    	mainFuncs.createNewUserDBRow(username,picLink);
		};
	});


// mainFuncs.recognizeFace('Gary', mainVars.garyBusey_04);


//var newUserInfo = [username, link, date];
// }else if(newAccount === false){
// var newPicInfo = ['username','picPath','anger','disgust','disgustConfidence','fear','fearConfidence','happiness','happinessConfidence','sadness','sadnessConfidence','surprise','surpriseConfidence'];
// mainFuncs.createNewPicInfo('username','picPath','anger','disgust','disgustConfidence','fear','fearConfidence','happiness','happinessConfidence','sadness','sadnessConfidence','surprise','surpriseConfidence');
// mainFuncs.learnFace('Leachmanh','./pics/Leachmanh');