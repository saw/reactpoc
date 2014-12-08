var router = require('./lib/router').Router();
var routes = require('./routes.js')(router);


var content = document.getElementById('content');
var state = require('./models/globalstate.js');

content.addEventListener('click', function(e) {
	if(e.target.tagName === 'A' && e.target.href) {
		
		if(router.route(e.target.pathname)) {
			e.preventDefault();
			window.history.pushState({},null, e.target.pathname);
		}
		
	}
	//
});

window.addEventListener('popstate', function(e) {
	router.route(window.location.pathname);
});
