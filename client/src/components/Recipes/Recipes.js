import React, { Component } from 'react';
import Search from "../search/Search";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import MyFooter from "../Footer/MyFooter";
import CardRecipe from "./CardRecipe"
import axios from 'axios';
import './CardRecipe.css'

export default class Recipes extends Component {
  constructor() {
    super()
    this.headerTitle= "My recipes";

    this.state = {
      recipes: null
    }
 

  }

  onSearchChange = (e) => {
   
    if(e.length>4){

      console.log(e.length)
      axios.post('http://localhost:5000/api/recipes', {search: e})
        .then(res => {
          console.log('respuesta de mi server', res.data.allRecipes)
          this.setState({recipes: res.data.allRecipes})
          
        })
        .catch(err => console.log(err))
    }

  }


  render() {
    console.log('the state is ---->' + this.state)
    return (
      <div>
       <ReusableHeader title={this.headerTitle}  />
        <Search onSearchChange={this.onSearchChange}/>
        {Array.isArray(this.state.recipes) ? this.state.recipes.map(recipe => {
          console.log(recipe.recipeDetails.ingredients)
            return <CardRecipe name={recipe.recipeDetails.name} img={recipe.recipeDetails.img} ing={recipe.recipeDetails.ingredients}/>
         
          
          }) : <p className="search-instruction">Search recipe by ingredient...</p>}
        
        <MyFooter/>
         
       
      </div>
    );
  }
}
