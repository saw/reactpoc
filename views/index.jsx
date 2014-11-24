var React = require('react');
var Nav = require('./nav.jsx');

var HelloMessage = React.createClass({

	getInitialState: function() {
    	return {word: '!!'};
  	},

	onClick: function() {
		console.log('click');
		this.setState({word: 'fail'});
	},

	render: function() {
		return (
			<div>
				<Nav></Nav>
				<div className="container">
					<div>
						<div>
							<h1>Hello world</h1>
							<p>This is the world</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = HelloMessage;