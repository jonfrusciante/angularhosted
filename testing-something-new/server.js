var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var api = require('./server/routes/api');

var port = 8080;


var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));



app.use('/api', api);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){
	console.log("server running on localhost:" + port);
});