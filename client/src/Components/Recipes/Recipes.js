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
