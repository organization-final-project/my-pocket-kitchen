import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";
import Search from "../search/Search";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import "./Mylist.css";

export default class MyShoppingList extends Component {
  constructor() {
    super();

    this.state = {
      MyShoppingList: ["huevos", "patatas"],
      headerTitle: "My shopping lists"
    };
  }

  onSearchChange = (e) => {
    console.log(e)
  };

  addValue = (e) => {
    let MyShoppingList = [...this.state.MyShoppingList];
    MyShoppingList.push(e);
    console.log(this)
    this.setState({ MyShoppingList });
    //e.preventDefault();
  };

  render() {
    return (
      <div>
        <ReusableHeader title={this.state.headerTitle} />
        <Search onSearchChange={e => this.onSearchChange(e)} />
        <a href
          className="button is-primary buttonAdd"
          onClick={e => this.addValue("hola" + e)}
        >
          Add
        </a>
        <div>
          <div className="title-my-list"><h4 className="title-shopping-list">My shopping list</h4><i class="fas fa-pencil-alt"></i></div>
          <ul>
            {this.state.MyShoppingList.map(item => {
              console.log(item);
              return <div className="item-shopping-list"><li>{item}</li><i class="fas fa-trash-alt" style={{ fontSize: 15,color: "#42A9B6"}}></i></div> ;
            })}
          </ul>
        </div>

        <MyFooter />
      </div>
    );
  }
}
