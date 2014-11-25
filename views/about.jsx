var React = require('react');
var Nav = require('./nav.jsx');

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
							<h1 onClick={this.onClick}>Hello {this.props.name} {this.state.word}.</h1>
							<div>This is the about page</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = message;