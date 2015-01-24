var app = {};

var Dispatcher = require('flux').Dispatcher;

var content = document.getElementById('content');
var state = require('./models/globalstate.js');

var AppDispatcher = new Dispatcher();
app.AppDispatcher = AppDispatcher;
var ListStore = require('./stores/listStore.js')(AppDispatcher, app);
var router = require('./lib/router').Router(app);
var routes = require('./routes.js')(router, app);

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
