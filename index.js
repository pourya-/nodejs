var http = require('http');
var url = require('url')

var httpServer = http.createServer(function(req,res){
  var queryObject = url.parse(req.url, true).query;
  var greeting = queryObject.greeting || 'default greeting';
  res.end('this is my firsr node app. ' + greeting);
});

httpServer.listen(8080,function(){
  console.log('server listening on port 8080');
});
