const express = require('express');
const router = express.Router();
const MyShoppingList = require ('../models/MyShoppingList');


router.get('/my-shopping-list', (req,res,next)=>{
    console.log("hola", req.body)
    const newShoppingList = new MyShoppingList([
        
    ])
})