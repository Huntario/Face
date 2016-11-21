var express = require('express');
var router = express.Router();
var tableData = require('../data/table-data.js');
router.get('/', function (req, res) {
    res.send('index.html');
});
router.post('/create', function(req,res){
    connection.query('INSERT INTO --table-- (--user--) VALUES (?)', [req.body.plan], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});
router.get('/:user', function (req, res) {
	//need a route to redirect user to their own profile
    res.result;
});
module.exports = router;