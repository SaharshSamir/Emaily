const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then( user => {
        done(null, user);
    })
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googelClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if(existingUser){
                    //we already have a user with this google ID
                    done(null, existingUser);
                }else{
                    //create new user with new ID
                    new User({ googleId: profile.id }).save()
                    .then(user => done(null, user));
                }
            })
    })
);