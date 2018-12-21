const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post('/', (req,res,next)=>{
  let userID = req.body.user._id
  let recipe = req.body.recipe
  console.log(req.body.recipe)
    User.findOneAndUpdate({_id:userID},{$set:{favRecipes:recipe }}, {new:true}, function(err,result){
        console.log(result)
    })



    
});
   
module.exports=router;