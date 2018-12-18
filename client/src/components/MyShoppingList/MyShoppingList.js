import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";
import Search from "../search/Search";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import "./Mylist.css";

export default class MyShoppingList extends Component {
  constructor() {
    super();

    this.state = {
      MyShoppingList: ["eggs", "lettuce"],
      headerTitle: "My shopping lists"
    };
  }

  onSearchChange = e => {
    document.getElementsByClassName("searchBar").innerHTML = e;
  };

  addValue = e => {
    let valueOfSearch = document.getElementsByClassName("searchBar").innerHTML;
    this.state.MyShoppingList.push(valueOfSearch);
    this.setState({ ...this.state, MyShoppingList: this.state.MyShoppingList });
    //e.preventDefault();
  };

  removeItem = index => {
    let valueOfRemove = this.state.MyShoppingList;
    valueOfRemove.splice(index, 1);
    this.setState({ ...this.state, MyShoppingList: this.state.MyShoppingList });
  };

  render() {
    return (
      <div>
        <ReusableHeader title={this.state.headerTitle} />
        <Search onSearchChange={e => this.onSearchChange(e)} />
        <a
          href
          className="button is-primary buttonAdd"
          onClick={e => this.addValue()}
        >
          Add
        </a>
        <div>
          <div className="title-my-list">
            <h4 className="title-shopping-list">My shopping list</h4>
            <i class="fas fa-pencil-alt" />
          </div>
          <ul>
            {this.state.MyShoppingList.map((item, index) => {
              return (
                <div className="item-shopping-list">
                  <li>{item}</li>
                  <i
                    class="fas fa-trash-alt"
                    style={{ fontSize: 15, color: "#877C73" }}
                    onClick={e => this.removeItem(index)}
                    key={index}
                  />
                </div>
              );
            })}
          </ul>
        </div>

        <MyFooter />
      </div>
    );
  }
}
