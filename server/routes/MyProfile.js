const express = require("express");

const router = express.Router();
const User = require("../models/User");

router.get("/delete/:id", (req, res, next) => {
  const userID = req.params.id;
  User.findByIdAndDelete({ _id:userID })
    .then(() => {
      console.log("delete user");
    })
    .catch(err => {
      console.log("don't delete user" + err);
    });
});

module.exports = router;
