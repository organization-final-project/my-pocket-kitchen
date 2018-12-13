import React, { Component } from 'react';
import './CardRecipe.css'

export default class CardRecipe extends Component {
 
  constructor() {
    super();
    this.state = { 
      name: "Paella",
      // image: 
      ingredients: ["arroz", "sal", "pollo"]

    }
  }

  render() {
    return (
      <div>
        
        <div className = "card">
        <h1>{this.state.name}</h1>
        <img src="" alt=""/>
        {this.state.ingredients.map(ingredient=>{
          return <p>{ingredient}</p>
        
        })}
        
        </div>
      </div>
    )
  }
}