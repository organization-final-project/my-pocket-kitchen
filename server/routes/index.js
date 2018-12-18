const express = require("express");
const router = express.Router();


/* GET home page */

const authRoutes = require("./auth");
router.use("/auth", authRoutes);

router.use('/recipes', require('./recipes'))

router.use('/my-kitchen',require('./myKitchenFood'))

module.exports = router;
