import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";
import Search from "../search/Search";
import "./Mylist.css";
import AuthService from '../auth/AuthService'

export default class MyShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: this.props.user._id,
      MyShoppingList: this.props.user.myShoppingList,
      headerTitle: "My shopping lists"
      
    };
    this.authService = new AuthService();
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
  componentDidMount=()=>{
    document.getElementById("title").innerHTML = "My Shopping List"
    
   }
  addShoppingList=()=>{
    const {MyShoppingList, userID}=this.state
    this.authService.addShoppingList({MyShoppingList, userID})

  }
  render() {
    return (
      <div>
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
          <ul className="list-items">
            {this.state.MyShoppingList.map((item, index) => {
              return (
                <div className="item-shopping-list">
                  <li>{item}</li>
                  <i
                    class="fas fa-trash-alt"
                    style={{ fontSize: 18, color: "#877C73" }}
                    onClick={e => this.removeItem(index)}
                    key={index}
                  />
                </div>
              );
            })}
          </ul>
        </div>
        <a
          href
          className="button is-primary buttonAdd save"
          onClick={()=>{this.addShoppingList()}}>
          Save the list
        </a>
        <MyFooter />
      </div>
    );
  }
}
