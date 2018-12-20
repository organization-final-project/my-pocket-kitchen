import React, { Component } from "react";
import Search from "../search/Search";
import MyFooter from "../Footer/MyFooter";
import CardRecipe from "./CardRecipe";
import axios from "axios";
import "./CardRecipe.css";
import "./recipes.css";
import AuthService from '../auth/AuthService'

export default class Recipes extends Component {
  constructor() {
    super();

    this.state = {
      recipes: null,
      user: null
    };
    this.authService = new AuthService();
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
componentWillMount = () =>{
  this.setState({...this.state,user:this.props.user})
}
  topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  addFavRecipes = (recipe) =>{
    let user = this.state.user
    this.authService.addFavoriteRecipe(recipe,user);
  }


  render() {
    
    return (
      <div>
        <Search onSearchChange={this.onSearchChange} />
        {Array.isArray(this.state.recipes) ? (
          this.state.recipes.map(recipe => {
            return (
              <CardRecipe 
              add = {this.addFavRecipes}
              user={this.state.user}
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
        <i
          id="go-up"
          className="fas fa-angle-up"
          onClick={() => this.topFunction()}
        />
        <MyFooter />
      </div>
    );
  }
}
