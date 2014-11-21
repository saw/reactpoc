var router = require('./lib/router').Router();


var routes = require('./routes.js')(router);

router.route('/');