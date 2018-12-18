const User = require ("../models/User")
const express = require('express');

const router = express.Router();

router.post("/my-kitchen", (req, res, next)=>{

const {listFridge , listPantry} =req.body;
const kitchenFood = new KitchenFood({
  listFridge,
  listPantry

});

kitchenFood.save (err=> {
  if(err) {
    next(null, false, {
      message: kitchenFood.errors
    
    });
  } else {
    res.status(200).json(kitchenFood)
  }
}

)


})


module.exports = router