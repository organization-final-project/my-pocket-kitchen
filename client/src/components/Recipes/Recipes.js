import React, { Component } from 'react';
import Search from "../search/Search";
import React, { Component } from "react";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import axios from 'axios';
import MyFooter from "../Footer/MyFooter";

export default class Recipes extends Component {
  constructor() {
    super()
    this.headerTitle= "My recipes"
 

  }

  render() {
    return (
      <div>
        <h1>Esta es la pagina de recipes</h1>
        <Search/>
        <MyFooter/>
        <ReusableHeader title={this.headerTitle}  />
        <input
          className="input is-small"
          type="text"
          placeholder="Small input"
          onChange={this.searchRecipes} />
          
        <MyFooter />
      </div>
    );
  }
}
