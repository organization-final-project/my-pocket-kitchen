const express = require("express");
const router = express.Router();


/* GET home page */

const authRoutes = require("./auth");
router.use("/auth", authRoutes);

router.use('/recipes', require('./recipes'))

<<<<<<< HEAD
router.use('/my-kitchen',require('./myKitchenFood'))
=======
router.use('/myProfile', require('./MyProfile'))

 router.use('/my-shopping-list', require('./myShoppingList'))
>>>>>>> b50d235c67487fae0e85265db512e4a616db5ba7

module.exports = router;
