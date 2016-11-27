var express = require('express');
var fs    = require("fs")
var router = express.Router();
var appKeys = require('../keys.js').appKeys;
var skybiometry = require('skybiometry');
const client = new skybiometry.Client(appKeys.key1, appKeys.key2);
var tableData = require('../data/table-data.js');
var bodyParser = require('body-parser');
var app = express();

// do not use below app
// var app = express.Router();
var multer  = require('multer');
var upload = multer({ dest: './routes/uploads' });
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

router.get('/users/add', function (req, res) {
	res.json(tableData);

});

/*
	app.post('/api/tables', function (req, res) {
		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table
		if (tableData.length < 5) {
			//tableData.push(req.body);
			res.json(true); // KEY LINE
		} else { // Or false if they don't have a table
			waitListData.push(req.body);
			res.json(false); // KEY LINE

		}


	});

*/

// router.post('/users/add', function (req,res,next) {
	// app.post('/users/add',upload.single('sourcefile'), function (req,res,next) {
router.post('/users/add',upload.single('sourcefile'), function (req,res,next) {

	//upload.single('sourcefile'),
	console.log("inside router.post request file:",req.file);
	console.log("inside router.post request path:",req.file.path);
 	//console.log("inside app.post request body yug:"+JSON.stringify(req.body));
 	//tableData.push(req.body);
 	faceDetect(req.file.path);

 	//learnFace(req.body.username);
 	res.json(true);
 	// res.send("Hey, it's atleast getting to the route....",faceDetect());
});

router.post('/users/webcamimage', function (req,res) {

	var base64Data = req.body.snapShotBinaryImage.replace(/^data:image\/jpeg;base64,/, "");
	var myimgpath = "./routes/uploads/out.png";
	new Promise(function(resolve, reject) {
		require("fs").writeFile(myimgpath, base64Data, 'base64', function(err) {
           if (err) {
           	//reject(err);
	  		console.log("file write error:");
 			res.json(true);
           	resolve(err);
           } else {
		  	console.log('great write success');	console.log("inside router.post webcamimage request file:"+JSON.stringify(req.body.snapShotBinaryImage));
 			//tableData.push(req.body);
 
 			faceDetect(myimgpath);
 			//	webcamDetect(req.body.snapShotBinaryImage);

 			//learnFace(req.body.username);
 			res.json(true);

           	resolve(base64Data);
           }
		});
	});

		//console.log("inside router.post webcamimage request path:",req.file.path);

     // var formdata = new FormData();
     // formdata.append("filename","temp.jpg"); 
      //formdata.append("base64image", req.body.snapShotBinaryImage);
     // formdata.append("file",req.body.snapShotBinaryImage); 

		//console.log("inside router.post webcamimage request path:",JSON.stringify(req.body.snapShotBinaryImage));
	 	//console.log("inside router.post webcamimage request file:"+JSON.stringify(req.body));
	 
	 	// res.send("Hey, it's atleast getting to the route....",faceDetect());
});


/*app.post('/uploadfile', upload.single('sourcefile'), function (req, res) {
	res.send('all done!');
})
*/
 // }

//module.exports = app;
module.exports = router;

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


function faceDetect(image){
 client.faces.detect({ files: fs.createReadStream(image) })
 //client.faces.detect({ files: image })

.then(result => console.log("fileinput--------",result));

}

function webcamDetect(streamImage){
 client.faces.detect({ files: streamImage })
 //client.faces.detect({ files: image })

.then(result => console.log("fileinput--------",result));

}




