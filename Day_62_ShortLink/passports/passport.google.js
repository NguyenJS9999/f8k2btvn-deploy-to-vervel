const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { Provider, User } = require("../models/index");
module.exports = new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope: ["profile", "email"],
  },
  async function (accessToken, refreshToken, profile, done) {
    const {
      displayName: name,
      emails: [{ value: email }],
    } = profile;
    const [provider] = await Provider.findOrCreate({
      where: { name: "google" },
      defaults: { name: "google" },
    });
    const [user] = await User.findOrCreate({
      where: { email, provider_id: provider.id },
      defaults: {
        fullname: name,
        email,
        provider_id: provider.id,
        status: true,
      },
    });
    return done(null, user);
  },
);
