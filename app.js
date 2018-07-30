const express = require('express');
const app = express();
const path = require('path');
const authRoutes = require('./routes/auth-routes');
const profileRoute = require('./routes/profile-routes');
const grammarRoutes = require('./routes/grammar-routets');
const codingRoutes = require('./routes/coding-routes');
const wordsRoutes = require('./routes/words-routs');
const contactRoutes = require('./routes/contact-routes');
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
app.use('/profile', profileRoute);
app.use('/grammar', grammarRoutes);
app.use('/coding', codingRoutes);
app.use('/words', wordsRoutes);
app.use('/contact', contactRoutes);

// home route
app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});



app.listen(port, () => {
    console.log(`Server running at ${port}`);
});