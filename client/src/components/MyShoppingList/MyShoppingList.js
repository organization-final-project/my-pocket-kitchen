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
    //todo: hablar cond dconsole.log(`Estais buscando: ${search}`)
    // axios.get(url/api/search/${search})
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
