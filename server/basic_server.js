var express = require('express');
var app = express();

var path = require('path');

var session = require('express-session')

var bookshelf = require('./config.js');

var bodyParser = require('body-parser');
var authRouter = require('./authRoutes.js');
var dataRouter = require('./dataRoutes.js');
var controller = require('./controllers/dataControllers');

var authRedirectMiddleware = function(req, res, next){
  if(req.session.level === undefined) {
    res.redirect('/login');
  } else if (req.session.level !== 'loggedIn') {
    res.redirect('/login');
  } else if(req.session.level === 'loggedIn') {
    next();
  }
};

////
// express-sessions
////

var sess = {
  secret: 'bbucsecRit',
  cookie: {},
  resave: false,
  saveUninitialized: true,
}

// if (app.get('env') === 'production') {
  // app.set('trust proxy', 1) // trust first proxy
  // has to be https, for now we are not
  // sess.cookie.secure = true // serve secure cookies
// }


// the first thing that actually happens
// is a session is created

app.use(session(sess))

///
// end express-sessions
///



// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));




app.get('/login', function(req, res) {
  // console.log('req.session from /login', req.session)
  res.sendFile(path.join(__dirname, './authViews', 'login.html'));
});

app.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, './authViews', 'signup.html'));
});

app.get('/llama.png', function(req, res) {
  // console.log('req.session from /login', req.session)
  res.sendFile(path.join(__dirname, './authViews', 'llama.png'));
});


app.post('/message/sendEmail', controller.message.sendEmail);

// Set up our login/logout api routes
app.use('/authApi', authRouter);


////////
// this is the auth cutoff point
////////



if (process.env.SKIP_AUTH !== 'skip') {

  app.use(authRedirectMiddleware);
}


/////////



// catch anything named correctly in /../client
app.use(express.static(__dirname + '/../client'));

// Set up our data api routes
app.use('/api', dataRouter);

app.get('/api/user/status', function(req, res) {
  res.json(req.session)
})

// catch any other urls and send to index.html in /../client
app.get('*', function(req, res) {

  console.log('from wildcard route!! ', req.session)
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});


module.exports = app;
