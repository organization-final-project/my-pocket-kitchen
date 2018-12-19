const express = require("express");
const router = express.Router();


/* GET home page */

const authRoutes = require("./auth");
router.use("/auth", authRoutes);

router.use('/recipes', require('./recipes'))

router.use('/myProfile', require('./MyProfile'))

 router.use('/my-shopping-list', require('./myShoppingList'))

module.exports = router;
