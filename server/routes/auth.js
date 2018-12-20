const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }
      res.status(200).json(theUser);
    });

    
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body)
 
 
  // const email = req.body.email;
  if (username === "" || password === "") {
    res.status(500).json({ message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(500).json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      // email
    });
   
    newUser.save().then((user) => {
      if (err) {
        res.status(500).json({ message: "Something went wrong" });
      } else {
        req.login(user, err => {
          if (err) {
            res.status(500).json({ message: "Login after signup went bad." });
            return;
          }

          res.status(200).json(user);
        });
      }
    });
  });
});

router.get("/loggedin", (req, res) => {
  if (req.isAuthenticated()) {
 
    return res.status(200).json(req.user);
  } else {
    return res.status(403).json({ message: "Unauthorized" });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  console.log("se ha deslogueado")
  res.status(200).json({ message: "Logout" });
});


module.exports = router;
