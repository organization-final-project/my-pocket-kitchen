const express = require("express");
const router = express.Router();


/* GET home page */

const authRoutes = require("./auth");
app.use("/auth", authRoutes);




module.exports = router;
