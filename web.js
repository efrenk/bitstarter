var express = require('express');
var app = express.createServer(express.logger());
var url = require('url');
var fs = require('fs');
var index = fs.readFileSync("index.html");
app.get('/', function(request, response) {
var route = url.parse(request.url).pathname;
if(route == "/") {
       route = "index.html";
       }
var index = fs.readFileSync(route);
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write(index);
  response.end();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
