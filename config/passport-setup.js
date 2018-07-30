const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-models');

passport.use(
    new GoogleStrategy({
        // options for the google strat
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        // possible callback function
        console.log('passport callback fired');
        console.log(profile);
        new User({
            username: profile.displayName,
            googleID: profile.id
        }).save().then((newUser) => {
            console.log(`A new user created: ${newUser}`);
        });
    })
);


