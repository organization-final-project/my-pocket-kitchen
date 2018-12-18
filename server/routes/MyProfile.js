const express = require('express');

const router = express.Router();
const User =require('../models/User')

router.get('/delete/:id', (req,res,next)=>{
    const user = req.user._id;
User.findByIdAndRemove({user})
.then(()=>{
    console.log("delete user")
})
.catch((err)=>{
    console.log("don't delete user" + err )
})
})


module.exportes=router;