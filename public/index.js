const skybiometry = require('skybiometry');
const client = new skybiometry.Client('e35d50f14853413ba9a1e4d210619474', '9651fee41b5b4f598ab33feec3deeb50');
client.faces.detect({ urls: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSjvJPGgDjpY42mL4oDMU9iv9DaTaKFlZfI0v7SwqsN4gUlMCdu', attributes: 'all' });

//Html form
// 1. w/username
// 2. take picture
// var newUser = function (username, link){
//  this.username = username;
//  this.pictureLink = link;
// };
client.tags.save('TEMP_F@0a80c0124c2cfa52301d87fb00900061_e4f338a14c3f5_48.48_57.06_0_1', 'mark@peter', {
  label: 'Mark',
  password: 'optionalPassword',
})
client.faces.train('mark', { namespace: 'peter' })
client.faces.recognize('all@peter', { urls: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSjvJPGgDjpY42mL4oDMU9iv9DaTaKFlZfI0v7SwqsN4gUlMCdu', attributes:'all' })
.then(function (result) {
  var newData = JSON.parse(result);
  console.log(newData.photos[0].tags[0].uids[0].uid)
  console.log(newData.photos[0].tags[0].uids[0].confidence)
  var user = newData.photos[0].tags[0].uids[0].uid;
  var confidence = newData.photos[0].tags[0].uids[0].confidence;
  if (confidence > 40){
  console.log("This looks like a match. We're: " + confidence + "confident." )
  } else{
  console.log("This is not a match.")
}
});

