require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

let urlEdemam='';

router.get('/', (req,res, next)=>{
    console.log(req.body);
   let searchRecipe = 'patata'
    urlEdemam=`https://api.edamam.com/search?q=${searchRecipe}&app_id=7e715a9f&app_key=aea0ce5fcf65bb5a29a2ae2c6c6026c0`

    axios.get(urlEdemam)
    .then((recipes)=>{
      
        // console.log(recipes.data.hits)
        const recipeName=recipes.data.hits.label
        const recipeImage=recipes.data.hits.image
        const recipeIngredients=recipes.data.hits.ingredientLines
        console.log(recipeIngredients)
        console.log("entra")
    })
    .catch((error)=>{
        console.log(error)
    })
})


module.exports = router;

