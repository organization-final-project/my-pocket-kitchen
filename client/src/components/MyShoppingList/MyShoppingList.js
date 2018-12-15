import React, { Component } from 'react';
import MyFooter from '../Footer/MyFooter';
import Search from "../search/Search";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import './Mylist.css'

export default class MyShoppingList extends Component {
  constructor(){
    super()
   
    this.headerTitle="My shopping lists";
    this.state ={
      MyShoppingList:["huevos","patatas"]
     }
  }

  onSearchChange(addedItem) {
    this.setState(...this.state, MyShoppingList.push({addedItem}))
  }

  render() {
    return (
      <div>
        <ReusableHeader title={this.headerTitle} />
        <Search onSearchChange={this.onSearchChange}/>
        <a className="button is-primary buttonAdd" onClick={this.addItem}>
            Add
          </a>
          <div>
        <h4 className="title-shopping-list">My shopping list</h4>
        <ul>
          {this.state.MyShoppingList.map(item=>{
            console.log(item)
             return  <li>{item}</li>
          })}
             </ul>
       
      </div>

         <MyFooter/>
      </div>
    )
  }
}
