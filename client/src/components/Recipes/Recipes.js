import React, { Component } from 'react';
import Search from "../search/Search";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import MyFooter from "../Footer/MyFooter";
import CardRecipe from "./CardRecipe"

export default class Recipes extends Component {
  constructor() {
    super()
    this.headerTitle= "My recipes";
  }
    onSearchChange(search) {
      
      //todo: hablar cond dconsole.log(`Estais buscando: ${search}`)
      // axios.get(url/api/search/${search})
    }
  

  

  render() {
    return (
      <div>
       <ReusableHeader title={this.headerTitle}  />
        <Search onSearchChange={this.onSearchChange}/>
        <CardRecipe/>
        <MyFooter/>
         
       
      </div>
    );
  }
}
