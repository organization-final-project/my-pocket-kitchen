const User = require("../models/User");
const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
 
  let listFridge = req.body.listIngFridge;
  let listPantry = req.body.listIngPantry;
  let userID = req.body.userID;

  User.findOneAndUpdate({_id:userID},{$set:{listFridge:listFridge, listPantry:listPantry}},{new:true}, function(err, result){
    console.log(result);
  });
});

module.exports = router;

