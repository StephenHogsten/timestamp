var express = require('express');
var path = require('path');
var dateformat = require('dateformat');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:date', function(req, res) {
   var retJSON = {
      unix: null,
      natural: null
   };
   var d = new Date(req.params.date);
   if (d.getDay()) {
      retJSON.unix = d.valueOf();
      retJSON.natural = dateformat(d, 'mmmm d yyyy');
   }
   res.json(retJSON);
   res.end();
});

app.listen(8080, function(a) {
    console.log('added new listener: ' + a);
});