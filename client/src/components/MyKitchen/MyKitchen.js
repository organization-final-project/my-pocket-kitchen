import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";
import Search from "../search/Search";
import Logout from "../auth/Logout";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import CardKitchen from "./CardKitchen";
import "./MyKitchen.css";

export default class MyKitchen extends Component {
  constructor() {
    super();
    this.headerTitle = "My kitchen";
    this.state = {
      listIngredients: []
    
    };
    this.addItem = this.addItem.bind(this);
  }

  onSearchChange(search) {
    console.log(search);
  }

  addItem(e) {
    
    e.preventDefault();
  
    const list = this.state.listIngredients;
    const newIngredient = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");



       if (newIngredient.value != "") {
     
        list.push(newIngredient.value);
      // Then we use that to set the state for list
      this.setState({
        listIngredients: list
      });
      newIngredient.classList.remove("is-danger");
      form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newIngredient.classList.add("is-danger");
    }
  }

  render() {
    return (
      <div>
        <ReusableHeader title={this.headerTitle} />
        <div className="searchButton">
          <Search onSearchChange={this.onSearchChange} />
          <a class="button is-primary buttonAdd" onClick={this.addItem}>
            Add
          </a>
        </div>

        <CardKitchen />
        {/* <Logout/> */}
        <MyFooter />
      </div>
    );
  }
}
