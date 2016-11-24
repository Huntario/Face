var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    res.send('POST handler for /dogs route.');
});
// router.get('/', function (req, res) {
//     res.send('index.html');
// });

module.exports = router;