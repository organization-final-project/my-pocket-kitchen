require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

let urlEdemam='';

router.post('/', (req,res, next)=>{
   let searchRecipe = req.body.search
    urlEdemam=`https://api.edamam.com/search?q=${searchRecipe}&app_id=7e715a9f&app_key=aea0ce5fcf65bb5a29a2ae2c6c6026c0`

    axios.get(urlEdemam)
    .then((recipes)=>{
        const allRecipes= allInformationRecipes(recipes.data.hits);
        res.status(200).json({allRecipes});
    })
    .catch((error)=>{
        console.log(error)
    })
})

function allInformationRecipes (arr){
    const allRecipes=[];

    for(var i=0;i<arr.length;i++){
        allRecipes.push({
            recipeDetails:{
                name: arr[i].recipe.label,
                img: arr[i].recipe.image,
                url:arr[i].recipe.url,
                ingredients:arr[i].recipe.ingredientLines
            }
        })
     } 

     return allRecipes;
}


module.exports = router;

