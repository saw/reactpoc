

var routes = [];

function addRoute(route, callback) {

	var obj = {};
	obj.route = route;
	obj.callback = callback;
	routes.push(obj);
}

function Res() {

}

Res.prototype.end = function(str) {
	console.log('end', str);
}

function Router() {

	return {

		get: addRoute,

		route: function(url) {

			routes.forEach(function(route) {
				console.log(route);
				if(url === route.route) {
					route.callback({}, new Res(), function() {});
				}
			});

		}

	};

};

module.exports = {
	Router:Router
};