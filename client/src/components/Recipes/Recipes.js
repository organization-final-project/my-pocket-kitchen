import React, { Component } from 'react';
import Search from "../search/Search";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import MyFooter from "../Footer/MyFooter";
import CardRecipe from "./CardRecipe"
import axios from 'axios';

export default class Recipes extends Component {
  constructor() {
    super()
    this.headerTitle= "My recipes";

    this.state = {
      recipes: null
    }
 

  }
    onSearchChange(search) {
      
      //todo: hablar cond dconsole.log(`Estais buscando: ${search}`)
      // axios.get(url/api/search/${search})
    }
  

  

  onSearchChange = (e) => {
   
    if(e.length>4){

      console.log(e.length)
      axios.post('http://localhost:5000/api/recipes', {search: e, test: 'test'})
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
        <Search onSearchChange={this.onSearchChange} test='hola'/>
        {Array.isArray(this.state.recipes) ? this.state.recipes.map(recipe => {
          console.log(recipe.recipeDetails.ingredients)
            return <CardRecipe name={recipe.recipeDetails.name} img={recipe.recipeDetails.img} ing={recipe.recipeDetails.ingredients}/>
         
          
          }) : <p>Busca receta por ingrediente</p>}
        
        <MyFooter/>
         
       
      </div>
    );
  }
}
