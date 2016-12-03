// detect method for sky biometry api
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


//function for save users uid into sky biometry and image 
//here we are  detect ,tags.save and train methods of skybiometry
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

//function to get an array of existing users

function getusersArray(){
	return new Promise( function( resolve, reject ) {
		client.account.users('raj')
		.then(function(result){
		console.log(result);
		resolve(result);
		});
	});	

}


// function to insert data into users table

function insertUserData(tempUserName,link) {
// store the new user information in database table models.users
	//console.log("temp tempLink:"+tempLink);
		  models.users.create({
			    name: tempUserName,
			   	link:link
			   

		});
} // end of - function insertUserData

//function for recognize face when use comes second time
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

//function to create user ifo when he recognized
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
}