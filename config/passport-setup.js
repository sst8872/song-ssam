const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        // options for the google strat
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }), () => {
        // possible callback function
    })
)


