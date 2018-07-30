const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-models');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for the google strat
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our db
        User.findOne({googleID: profile.id}).then((currentUser) => {
            if(currentUser) {
                // already have the user
                console.log(`user is: ${currentUser}`);
                //deserialize current user
                done(null, currentUser);
            } else {
                // create a new user
                new User({
                    username: profile.displayName,
                    googleID: profile.id
                }).save().then((newUser) => {
                    console.log(`A new user created: ${newUser}`);
                    done(null, newUser);
                });
            }
        });
    })
);


