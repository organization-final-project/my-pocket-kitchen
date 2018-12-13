import React, { Component } from 'react';
import MyFooter from '../Footer/MyFooter';
import Search from "../search/Search";
import ReusableHeader from "../ReusableHeader/ReusableHeader";

export default class MyShoppingList extends Component {
  constructor(){
    super()
    this.headerTitle="My shopping list";
  }
  render() {
    return (
      <div>
        Esta es la página de shopping list
        <Search/>
      <ReusableHeader title={this.headerTitle} />

         <MyFooter/>
      </div>
    )
  }
}
