const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport')
const User = require("../models/User")
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.Secret;
passport.use(new JwtStrategy(opts, async(jwt_payload, done) =>{
    try {
        const user = await User.findOne({_id: jwt_payload._id}).select("-password")
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
    } catch (error) {
        console.log(error)
    }
}));

module.exports = isAuth=()=> passport.authenticate('jwt', { session: false })