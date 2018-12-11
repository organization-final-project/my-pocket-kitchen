import React, { Component } from 'react';
import MyFooter from '../Footer/MyFooter';
import ReusableHeader from "../ReusableHeader/ReusableHeader";

export default class MyShoppingList extends Component {
  constructor(){
    super()
    this.headerTitle="My shopping list";
  }
  render() {
    return (
      <div>
      <ReusableHeader title={this.headerTitle} />

         <MyFooter/>
      </div>
    )
  }
}
