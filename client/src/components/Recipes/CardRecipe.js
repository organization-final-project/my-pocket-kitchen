import React, { Component } from 'react';
import './CardRecipe.css'

export default class CardRecipe extends Component {
 
  constructor() {
    super();
    this.state = { 
      name: "Paella",
      ingredients: ["arroz", "sal", "pollo"]

    }
  }

  // updateIngredients = (ing) =>{
  //   this.setState({ingredients: recipe.recipeDetails.ingredients})
  // }

  render() {
    return (
      <div>
        
        <div className = "card">
        <h1>{this.props.name}</h1>
        <img src={this.props.img} alt="" style={{height:120}}/>
        {this.props.ing.map(ingredient=>{
          // console.log(ingredient)
          return <p>{ingredient}</p>
        
        })}
       <a target="_blank" href={this.props.url} className="button is-primary buttonAdd deleteButton"
              style={{
                color: "white",
                backgroundColor: "#877C73",
                border: "1px solid #877C73"
              }}> How to...?</a>
       <i className="far fa-heart save-recipe"> <span className="text-save">Save it</span></i>       

        </div>
      </div>
    )
  }
}
