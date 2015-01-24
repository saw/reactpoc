var React = require('react');
var Nav = require('./nav.jsx');

var message = React.createClass({


	render: function() {
		return (
			<div>
				<Nav {...this.props}></Nav>
				<div className="container">
					<h1>You are NOT signed in</h1>
					<div>Totes</div>
				</div>
			</div>
		);
	}
});

module.exports = function() {
	return message;
}