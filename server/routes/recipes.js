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
        // const recipeName=recipes.data.hits[0].recipe.label
        // const recipeImage=recipes.data.hits[0].recipe.image
        // const recipeIngredients=recipes.data.hits[0].recipe.ingredientLines
        //const allRecipes= recipes.data.hits esta es la ruta general de todas las recetas
        const allRecipes= allInformationRecipes(recipes.data.hits);
        res.json({allRecipes});
       // console.log(allRecipes.recipesDetails)
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
                ingredients:arr[i].recipe.ingredientLines
            }
        })
     } console.log(allRecipes.recipesDetails)

     return allRecipes;
}


module.exports = router;

