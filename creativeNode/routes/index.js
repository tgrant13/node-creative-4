var express = require('express');
var router = express.Router();
var request = require('request');
var names = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/names', function(req, res) {
  console.log("In getnames");
  res.send(names);
});

router.post('/names', function(req, res) {
    console.log("In getnames post");
    console.log(req.body);
    var name = req.query.name;
	request('https://api.genderize.io/?name=' + name, function(error, response, body){
		names.push(req.body);
		res.send(body);
	})
}); 

module.exports = router;
