var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var http=require('http').Server(app);

app.use(bodyParser.json());
app.use(require('./controllers'));

http.listen(3000,function() {
	console.log('listening on port 3000');
});