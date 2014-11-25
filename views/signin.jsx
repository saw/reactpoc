var React = require('react/addons');
var emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;

var Signin = React.createClass({

  getInitialState: function() { 
    return {
      filled: false,
      passwordFilled: false,
      emailFilled: false,
      badEmail: false,
      badPass: false
    };
  },

  handleChange: function(e) {
    if(e.target.id === 'exampleInputEmail' && e.target.value !== '') {
      if(this.state.passwordFilled) {

        if(e.target.value.match(emailRegex)) {
          console.log('ok email');
          this.setState({filled:true, emailFilled: true, badEmail: false});
        } else {
          this.setState({badEmail:true});
        }
        
      } else {
        console.log('here');
        this.setState({emailFilled: true, filled: false, badEmail: false});
        if(!e.target.value.match(emailRegex)) {
          console.log('bad email');
          this.setState({badEmail:true});
        }
      }
    } else if(e.target.id === 'exampleInputPassword' && e.target.value !== '') {
      if(this.state.emailFilled) {
        this.setState({filled:true, passwordFilled: true})
      } else {
        this.setState({passwordFilled: true, filled: false});
      }
    } else if(e.target.value === '') {
      if(e.target.id === 'exampleInputEmail') {
        this.setState({emailFilled: false, filled: false});
      } else if(e.target.id === 'exampleInputPassword') {
        this.setState({passwordFilled: false, filled: false});
      }
    }

    
  },

  render: function() {

    var cx = React.addons.classSet;

    var emailClasses = cx({
      'form-group': true,
      'has-error': this.state.badEmail
    });

    var button;

    if(this.state.filled) {
      button = <button type="submit" className="btn btn-default">Submit</button>;
    } else {
      button = '';
    }
    return (
      <form role="form" onChange={this.handleChange}>
        <div className={emailClasses}>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail" placeholder="email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
        </div>
        {button}
      </form>
    );
  }
});

module.exports = Signin;
