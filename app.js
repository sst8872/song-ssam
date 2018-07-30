const express = require('express');
const app = express();
const path = require('path');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const port = process.env.PORT || 3000;

// set up view engine
app.set('view engine', 'pug');

// using cookie-session
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
   console.log('connected to mongodb');
});

// pug prettify
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

// set up assets
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', (req, res, next) => {
    console.log('Request url: ' + req.url);
    next();
});

// set up route
app.use('/auth', authRoutes);

// home route
app.get('/', (req, res) => {
    res.render('index');
});

// grammar route
app.get('/grammar', (req, res) => {
    res.render('grammar/grammar');
});

// words route
app.get('/words', (req, res) => {
    res.render('words/words');
});

// coding route
app.get('/coding', (req, res) => {
    res.render('coding/coding');
});

// contact route
app.get('/contact', (req, res) => {
    res.render('contact/contact');
});


app.listen(port, () => {
    console.log(`Server running at ${port}`);
});