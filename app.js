var express = require('express');

var app = express();

app.get('/', function(req,res) {
	res.render('index.ejs', {title: 'Hi Hi big World!'});
});

app.get('/about', function(req,res) {
	res.render('layout.ejs', {title: 'About the coolest US', body:'<h1>About US and etc'});
});

app.get('/*', function(req,res) {
	res.status(404).render('error.ejs', {title: 'About the coolest US error!!! hmm...'});
});


//app.listen(3000); //for localhost only
//app.listen(process.env.PORT, process.env.IP);
app.listen(process.env.PORT);
console.log('Server is UP and running on port '+ process.env.PORT);
