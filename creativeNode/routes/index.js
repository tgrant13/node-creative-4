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
    var name = req.body.name;
	request('https://api.genderize.io/?name=' + name, function(error, response, body){
    var data = JSON.parse(body);  
    var name = {
      name: data.name,
      gender: data.gender
    }
		names.push(name);
		res.end('{"success" : "Updated Successfully", "status" : 200}');
	})
}); 

module.exports = router;
