var React = require('react');
var Nav = require('./nav.jsx')();

var message = React.createClass({

	getInitialState: function() {
    	return {word: '!!'};
  	},

	onClick: function() {
		this.setState({word: 'fail'});
	},

	render: function() {
		return (
			<div>
				<Nav {...this.props}></Nav>
				<div className="container">
					<div>
						<div>
							<h1>You are signed in!</h1>
							<div>Totes/div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = function() {
	return message;
}