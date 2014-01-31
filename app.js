var express = require('express');

var app = express();
//how URL routes work
//http://localhost:3000/about2/asdf
app.get('/about2/:title', function(req,res) {
	var title=req.params.title;
	res.send('<h1>About2'+title+ '</h1><p>Please make sure to know how cool '+title+' is :-)</p>');
});

//http://localhost:3000/about
//but also works for 
//http://localhost:3000/about2
app.get('/about', function(req,res) {
	res.send('<h1>About Us</h1><p>Please make sure to know how cool we are :-)</p>');
});



app.get('*', function(req,res) {
	res.send('<h1>Hi there!!!</h1><p>Please make sure to know how cool we are :-)</p>');
});

app.listen(3000);
console.log('Server is UP and running on port 3000');
