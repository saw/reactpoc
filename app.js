var express = require('express');
var app = express();

var router = express.Router();
var routes = require('./routes.js')(router);
app.engine('jsx', require('./lib/react-render.js'));
app.set('views', './views'); // specify the views directory
app.set('view engine', 'jsx'); // register the template engine

app.use('/js', express.static('public/js'));
app.use('/', router);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});