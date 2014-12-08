var express = require('express');
var app = express();
var passport = require('passport'),
session = require('express-session'),
GoogleStrategy = require('passport-google').Strategy;

passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:8080/auth/google/return',
    realm: 'http://localhost:8080/'
  },
  function(identifier, profile, done) {
    profile.identifier = identifier;
    done(null, profile);
  }
));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

var router = express.Router();
var routes = require('./routes.js')(router);




app.engine('jsx', require('./lib/react-render.js'));
app.set('views', './views'); // specify the views directory
app.set('view engine', 'jsx'); // register the template engine
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

// Redirect the user to Google for authentication.  When complete, Google
// will redirect the user back to the application at
//     /auth/google/return
app.get('/auth/google', passport.authenticate('google'));

// Google will redirect the user to this URL after authentication.  Finish
// the process by verifying the assertion.  If valid, the user will be
// logged in.  Otherwise, authentication has failed.
app.get('/auth/google/return', 
  passport.authenticate('google', { successRedirect: '/',
                                    failureRedirect: '/login' }));



app.use('/js', express.static('public/js'));

app.use('/', function(req, res, next) {
	req.ctx = {};
	req.ctx.signedin = req.isAuthenticated();
	req.ctx.user = req.user;
	next();
});
app.use('/', router);

router.get('/login', function(req, res) {
	res.render('index', {name: 'bob', url: req.url, signedin : true})
});

var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});