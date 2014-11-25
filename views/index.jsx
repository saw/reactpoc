var React = require('react');
var Nav = require('./nav.jsx');
var Signin = require('./Signin.jsx');

var HelloMessage = React.createClass({

	getInitialState: function() {
    	return {
    		
    	};
  	},

	onClick: function() {
		console.log('click');
		this.setState({word: 'fail'});
	},

	render: function() {

		var content;

		if(!this.props.signedin) {
			content = <Signin />;
		} else {
			content = <p> Hello! </p>
		}

		return (
			<div>
				<Nav {...this.props}></Nav>
				<div className="container">
					<div>
						<div>
							<h1>Hello world</h1>
							{content}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = HelloMessage;