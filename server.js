var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
   console.log(__dirname);
   res.end();
});

app.listen(8080, function(a) {
    console.log('added new listener: ' + a);
});