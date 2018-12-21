import React, { Component } from "react";
import Search from "../search/Search";
import MyFooter from "../Footer/MyFooter";
import CardRecipe from "./CardRecipe";
import axios from "axios";
import "./CardRecipe.css";
import "./recipes.css";

export default class Recipes extends Component {
  constructor() {
    super();

    this.state = {
      recipes: null
    };
  }

  onSearchChange = e => {
    if (e.length > 4) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/recipes`, { search: e })
        .then(res => {
          // console.log('respuesta de mi server', res.data.allRecipes)
         
          this.setState({ recipes: res.data.allRecipes });
        })
        .catch(err => console.log(err));
    }
  };
  componentDidMount = () => {
    
    document.getElementById("title").innerHTML = "My Recipes";
    document.getElementById("addInput").placeholder = "Search...";
 
  };

 topFunction=()=> {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


  render() {
    return (
      <div>
        <Search onSearchChange={this.onSearchChange} />
        {Array.isArray(this.state.recipes) ? (
          this.state.recipes.map(recipe => {
            return (
              <CardRecipe
                name={recipe.recipeDetails.name}
                img={recipe.recipeDetails.img}
                ing={recipe.recipeDetails.ingredients}
                url={recipe.recipeDetails.url}
              />
            );
          })
        ) : (
          <p className="search-instruction">
            Search recipe by ingredient...
            <img
              src="coffee.gif"
              alt=""
              style={{ height: 100, width: 100, marginTop: 50 }}
            />
          </p>
        )}
        <i id="go-up"className="fas fa-angle-up" onClick={()=>this.topFunction()} />
        <MyFooter />
      </div>
    );
  }
}
