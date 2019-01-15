import React, { Component } from 'react';
import './CardRecipe.css'

export default class CardRecipe extends Component {
 
  constructor(props) {
    super(props);
    this.state = { 
      name: "Paella",
      ingredients: ["arroz", "sal", "pollo"],
      favRecipes: null
    }
  }

  componentWillMount = () =>{
    this.setState({...this.state, favRecipes:this.props.user.favRecipes})
  }

  addRecipe = (infoRecipe) =>{
    this.state.favRecipes.push(infoRecipe)
    this.props.add(this.state.favRecipes)
  }

  render() {
    
    let {name,img,url} = this.props
   let infoRecipe = {name, img, url}
    return (
      <div className="cards-container">
        
        <div className = "card">
        <h1>{this.props.name}</h1>
        <img src={this.props.img} alt="" style={{height:120}}/>
        {this.props.ing.map(ingredient=>{
          return <p>{ingredient}</p>
        
        })}
       <a target="_blank" href={this.props.url} className="button is-primary buttonAdd deleteButton"
              style={{
                color: "white",
                backgroundColor: "#877C73",
                border: "1px solid #877C73"
              }}> How to...?</a>
       <i className="far fa-heart save-recipe"> <span className="text-save" onClick={()=>{this.addRecipe(infoRecipe)}}>Save it</span></i>       

        </div>
      </div>
    )
  }
}
