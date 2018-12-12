import React, { Component } from 'react';
import MyFooter from '../Footer/MyFooter';
import Search from "../search/Search";

export default class MyShoppingList extends Component {
  render() {
    return (
      <div>
        Esta es la página de shopping list
        <Search/>
         <MyFooter/>
      </div>
    )
  }
}
