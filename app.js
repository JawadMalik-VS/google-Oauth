// const express = require("express");
// const app = express();
// const session = require("express-session");
// const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
// app.set("view engine", "ejs");

// require("dotenv").config();

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: "SECRET",
//   })
// );

// app.get("/", function (req, res) {
//   res.render("pages/auth");
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log("App listening on port " + port));

// /*  PASSPORT SETUP  */

// const passport = require("passport");
// var userProfile;

// app.use(passport.initialize());
// app.use(passport.session());

// app.set("view engine", "ejs");

// // app.get("/api/success", (req, res) => res.render("pages/success"));
// app.get("/success", (req, res) => res.send(userProfile));
// app.get("/error", (req, res) => res.send("error logging in"));

// passport.serializeUser(function (user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//   cb(null, obj);
// });

// /*  Google AUTH  */

// console.log("CLIENT ID", process.env.CLIENT_ID2);

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID2,
//       clientSecret: process.env.CLIENT_SECRET2,
//       callbackURL: "http://localhost:3000/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       userProfile = profile;
//       return done(null, userProfile);
//     }
//   )
// );

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/error" }),
//   function (req, res) {
//     // Successful authentication, redirect success.
//     res.redirect("/success");
//   }
// );
