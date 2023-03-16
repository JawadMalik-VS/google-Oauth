const express = require("express");
const google = require("google-oauth2");
const app = express();
const PORT = 3000;
const db = require("./db");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("./passportConfig")(passport);

db.connect();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/auth");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    jwt.sign(
      { user: req.user },
      "secretKey",
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          return res.json({
            token: null,
          });
        }
        res.json({
          token,
        });
      }
    );
  }
);

app.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.send("Welcome");
  }
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
