var express = require('express');

var app = express();

app.get('/', function(req,res) {
	res.render('index.ejs', {title: 'Hi Hi big World!'});
});

app.get('/about', function(req,res) {
	res.render('layout.ejs', {title: 'About the coolest US', body:'<h1>About US and etc'});
});

app.get('/*', function(req,res) {
	res.status(404).render('error.ejs', {title: 'About the coolest US error'});
});


app.listen(3000);
console.log('Server is UP and running on port 3000');
