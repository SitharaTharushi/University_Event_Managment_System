const express = require("express");
const User = require("./../models/userModel.js");
const bcrypt = require("bcrypt");

// Sign Up route
const signup = (req, res) => {
  console.log("Reached signup function"); //new 11/11
  const { name, email, password, faculty } = req.body;

  // Hash the password securely before saving it
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error(err);
      res.status(500).send("Sign-up failed");
    } else {
      const newUser = new User({
        name,
        email,
        password: hashedPassword, // Store the hashed password
        faculty,
      });

      newUser.save((err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Sign-up failed");
        } else {
          req.session.user = newUser; // Store the user in the session
          res.redirect("/form"); // Redirect to the event submission form
        }
      });
    }
  });
};

// Sign In route
const signin = (req, res) => {
  console.log("Reached signin function"); //new 11/11
  const { email, password } = req.body;

  User.findOne({ email, password }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send("Sign-in failed");
    } else if (!user) {
      res.status(401).send("Invalid email or password");
    } else {
      req.session.user = user; // Store the user in the session
      res.redirect("/form"); // Redirect to the event submission form
    }
  });
};

module.exports = { signin, signup };
