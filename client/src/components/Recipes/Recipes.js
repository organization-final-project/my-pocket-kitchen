import React, { Component } from 'react';
import Search from "../search/Search";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import MyFooter from "../Footer/MyFooter";
import CardRecipe from "./CardRecipe"

export default class Recipes extends Component {
  constructor() {
    super()
    this.headerTitle= "My recipes"
 

  }

  render() {
    return (
      <div>
       <ReusableHeader title={this.headerTitle}  />
        <Search/>
        <CardRecipe/>
        <MyFooter/>
         
       
      </div>
    );
  }
}
