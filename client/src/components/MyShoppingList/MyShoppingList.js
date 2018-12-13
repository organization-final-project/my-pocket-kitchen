import React, { Component } from 'react';
import MyFooter from '../Footer/MyFooter';
import Search from "../search/Search";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import Mylist from './Mylist'

export default class MyShoppingList extends Component {
  constructor(){
    super()
    this.headerTitle="My shopping lists";
  }

  onSearchChange(search) {
  
  }

  render() {
    return (
      <div>
        <ReusableHeader title={this.headerTitle} />
        <Search onSearchChange={this.onSearchChange}/>
        <Mylist  />

         <MyFooter/>
      </div>
    )
  }
}
