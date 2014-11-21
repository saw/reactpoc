var React = require('react');
var fs = require('fs');
require('node-jsx').install();

var wrapper = fs.readFileSync(__dirname + '/../views/layout.html', 'utf-8');
var arr = wrapper.split('{{content}}');

module.exports = function(filePath, options, callback) {

	var template = require(filePath);
	var rendered = React.renderToString(React.createElement(template, options));

	var out = arr.join(rendered);
	callback(null, out);
};