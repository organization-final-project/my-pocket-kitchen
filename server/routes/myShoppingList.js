const express = require('express');
const router = express.Router();
const User = require('../models/User')



router.post('/', (req,res,next)=>{
 
 let userID = req.body.userID;
   let myShoppingList= req.body.MyShoppingList;
 
    User.findOneAndUpdate({_id:userID},{$set:{myShoppingList: myShoppingList}}, {new:true}, function(err,result){
        console.log(result)
    })
    
});
   
module.exports=router;