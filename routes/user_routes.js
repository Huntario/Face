var express = require('express');
var fs    = require("fs")
var router = express.Router();
var appKeys = require('../keys.js').appKeys;
var skybiometry = require('skybiometry');
const client = new skybiometry.Client(appKeys.key1, appKeys.key2);
var tableData = require('../data/table-data.js');
var bodyParser = require('body-parser');
var app = express();

var models  = require('../models');

// do not use below app
// var app = express.Router();
var multer  = require('multer');
var upload = multer({ dest: './routes/uploads' });
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var usersArray;

var tempLink;

app.use(express.static('public'));

router.get('/users/add', function (req, res) {
	res.json(tableData);

});

router.get('/users/list', function(req, res) {
  models.users.findAll()
  // connect the findAll to this .then
  .then(function(userstabledata) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    console.log("userstabledata:"+JSON.stringify(userstabledata));
    res.render('usersbar', {
      users: userstabledata
    })
  })
});


router.get('/user/details/:name', function(req, res) {
  models.userpicdata.findAll({
    where: { username : req.params.name }
  })
  // connect the findAll to this .then
  .then(function(userpicdatatableresult) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    console.log("userpicdatatableresult:"+JSON.stringify(userpicdatatableresult));
    res.render('userpicdatabar', {
      userpicdata: userpicdatatableresult
    })
  })
});

function getUsers(){
	//var  usersArr;
	console.log("inside getusers");
	var p1=new Promise(function(resolve, reject) {
		console.log("getUsers promise begin");
		var usersResponse = client.account.users('raj');
		console.log("getUsers promise end");
		resolve(usersResponse);
	});
	p1.then(function(result){
		console.log("inside getusers begin result:"+JSON.parse(result));
		var usersArr = JSON.parse(result).users.raj;
			 //var j = result.json();
			
		console.log("users middle",JSON.parse(result).users.raj);
		usersArray = usersArr;
		console.log("inside getusers end");
		resolve("getUsers function resolved:"+result);
	    //return result;
          // 	res.send(true);
	}, function(err) {
			console.log("inside getusers err end");
			reject("getUsers function  failed:"+err);
	});
}

router.post('/users/add',upload.single('sourcefilename'), function (req,res,next) {

	//upload.single('sourcefileid'),
	console.log("inside router.post request file:",req.file);
	console.log("inside router.post request path:",req.file.path);
 	faceDetect(req.file.path);

 	res.json(true);

});

router.post('/users/webcamimage', function (req,res) {

	var base64Data = req.body.snapShotBinaryImage.replace(/^data:image\/jpeg;base64,/, "");
	var myimgpath = "./routes/uploads/out.png";
	var tempUserName;
					
	new Promise(function(resolve, reject) {
		require("fs").writeFile(myimgpath, base64Data, 'base64', function(err) {
           if (err) {
	           	//reject(err);
		  		console.log("file write error:");
	 			//res.json(false);
	           	resolve(err);
           } else {
			  	console.log('great write success');	

	 			client.account.users('raj').then(function(result){

		 		//	console.log("after getusers yug:"+result);
		 			usersArray = JSON.parse(result).users.raj;
		 			console.log("usersArray",usersArray);
		 			console.log("username",req.body.username);
		 			console.log("state",req.body.state);
		 			var user=req.body.username+'@raj';
		 			tempUserName = req.body.username;
		 			var userMatched = false;
		 			for(var i =0;i<usersArray.length;i++){
		 				if(usersArray[i] === user){
		 					console.log("user matched",user);

		 					userMatched = true;
		 				//	res.json(true);
		 				}
		 				
		 			}

		 			if (!userMatched) {
		 			//	res.json(false);
		 			}

		 			if ( req.body.state === "signup" ) {

						models.users.findAll({			
						    where: {
						      username: tempUserName
						    }
							  // connect the findAll to this .then
						}).then(function(tempusers) {
						//	console.log("tempusers:"+JSON.stringify(tempusers));
							var tmpUserCount = 0;
							if ( (tempusers !== undefined) &&
								(tempusers !== null) ) {
							//	console.log("tempusers :"+JSON.stringify(tempusers));
								console.log("tempusers length:"+tempusers.length);
								tmpUserCount = tempusers.length;
							}

							if (tmpUserCount < 1) {
								console.log("to insert users");
								insertUserData(tempUserName,req.body.snapShotBinaryImage);
							} else {

							 	res.setHeader('Content-Type', 'application/json');
							 	res.send(JSON.stringify({ result: 'User:'+ 
							 		tempUserName + 
							 		', already exists. Try another user' }));

							}
						}, function(err) {
							console.log("inside models.users.find err end:"+err);
							reject("failed yug");
						});

						// end of - if ( req.body.state === "signup" ) 
		 			}
		 			else if(req.body.state === "signin"){
		 				
		 				recognizeFace(req.body.username,myimgpath).then( function( data ) {
						//	console.log(" recognizeFace data:    "+JSON.stringify(data));
							var newData = JSON.parse(data);
					        var user = newData.photos[0].tags[0];
					        console.log("username:"+req.body.username);


					        createNewPicInfo(req.body.username,
					        	newData.photos[0].url,
					        	newData.photos[0].tags[0].attributes.age_est.confidence,
					        	newData.photos[0].tags[0].attributes.anger.confidence,
					        	newData.photos[0].tags[0].attributes.disgust.confidence,
					        	newData.photos[0].tags[0].attributes.fear.confidence,
					        	newData.photos[0].tags[0].attributes.happiness.confidence,
					        	newData.photos[0].tags[0].attributes.sadness.confidence,
					        	newData.photos[0].tags[0].attributes.surprise.confidence,
					        	newData.photos[0].tags[0].attributes.mood.value,
					        	newData.photos[0].tags[0].attributes.mood.confidence);
					        
					        var confidence = user.uids[0].confidence;
					        if (confidence > 40) {
					            console.log('This looks like a match. Were: ' + confidence + ' confident.');
					        } else {
					            console.log('This is not a match. Were: ' + confidence + ' confident.');
					        }

						});

						// end of - else if(req.body.state === "signin"){

		 			}
	 			 
	 				console.log("before getusers");

	 				// end of - client.account.users('raj').then(function(result)
	 			}, function(err) {
					console.log("inside promise getusers err end:"+err);
					reject("failed client.account.users");
				});
           } // end of -  } else {
		}); // end of - require("fs").writeFile(myimgpath, base64Data, 'base64', function(err)
	}); // end of - new Promise(function(resolve, reject) {

});

//module.exports = app;
module.exports = router;

function insertUserData(tempUserName,link) {
// store the new user information in database table models.users
	//console.log("temp tempLink:"+tempLink);
		  models.users.create({
			    username: tempUserName,
			   	link:link ,
			    date: new Date
		});
} // end of - function insertUserData

function faceDetectwithPromise(image){
	console.log("inside facedetect");
	return new Promise( function( resolve, reject ) {
		client.faces.detect({ files: fs.createReadStream(image) ,attributes: 'all'})
		 //client.faces.detect({ files: image })

		.then(function(result){
			//(result => console.log("fileinput--------",result);
			console.log("fileinput--------",result);
			resolve(result);
		});
	});	

} // end of - function faceDetectwithPromise(image

function learnFace(name, image) {
	console.log("inside learnFace");
    //client.faces.detect({ urls: testVars.garryB, attributes: 'all' })
    return new Promise( function( resolve, reject ) {
	    var nameString = String(name);
	    var fullNameSpace = name + '@raj';
	    var newLearn;
	    var newTid;
	    client.faces.detect({ files: fs.createReadStream(image) ,attributes: 'all'})
	    .then(function(result){
	    	// console.log("inside learnFace result:"+JSON.stringify(result));
	        newLearn = JSON.parse(result);
	        newTid = newLearn.photos[0].tags[0].tid;
	        console.log("newTid:"+newTid);

	        tempLink = newLearn.photos[0].url;
	      //  console.log("tempLink:"+tempLink);
			console.log("inside learnFace before save");
		    client.tags.save(newTid, fullNameSpace, {label: nameString, password: 'optionalPassword'})
		    .then(function(result){
				console.log("inside learnFace after save");

				console.log("inside learnFace before train");
			    client.faces.train(nameString, { namespace: 'raj' })
			    .then(function(result){
					console.log("inside learnFace after train");

				console.log("inside learnFace before resolve");
				resolve(result);
				console.log("inside learnFace after resolve");
	    
				});
				
			});

	    });

    }); // end of - return new Promise( function( 
}

function faceDetect(image){
	console.log("inside facedetect");
	client.faces.detect({ files: fs.createReadStream(image) })
	 //client.faces.detect({ files: image })

	.then(function(result){
		//(result => console.log("fileinput--------",result);
		console.log("fileinput--------",result);
		return result;
	});

}

function webcamDetect(streamImage){
	 client.faces.detect({ files: streamImage })
	 //client.faces.detect({ files: image })

	.then(result => console.log("fileinput--------",result));

}

function recognizeFace(name,filepath) {
    var fullNameSpace = name + '@raj';
   	return new Promise( function( resolve, reject ) {
   
		client.faces.recognize('all@raj', { files: fs.createReadStream(filepath),attributes: 'all' })
		.then(function(result){
			//console.log("result",result);
			resolve(result)

	  	});
	});	
}

function createNewPicInfo(uid,
	picLink,
	age_est,
	anger,
	disgust,
	fear,
	happiness,
	sadness,
	surprise,
	mood,
	mood_value){

  	console.log("inside createNewPicInfo");
 	models.userpicdata.create({
	 	username:uid,
	     picPath:picLink,
	     age_est:age_est,
	     anger:anger,
	     disgust:disgust,
	     fear:fear,
	     happiness:happiness,
	     sadness:sadness,
	     surprise:surprise,
	     mood:mood,
	     mood_value:mood_value
    });

}