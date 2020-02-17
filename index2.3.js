var express = require('express');
var app = express();
var url = require('url');
var morgan = require('morgan');

app.use(morgan('short'));

app.get('/', function(req,res){
	res.send('The Home Page.')
});
app.get('/greet/:statement', function(req,res){
	var greeting = req.params.statement || 'Default greetingt';
	res.send('this is my second node app test.' + greeting)
});

app.listen(8080, function(){
	console.log('server listening on port 8080');
});