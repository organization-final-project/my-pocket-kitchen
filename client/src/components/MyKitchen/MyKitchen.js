import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";
import Search from "../search/Search";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import "./MyKitchen.css";

export default class MyKitchen extends Component {
  constructor() {
    super();
    this.headerTitle = "My kitchen";
    this.state = {
      listIngredients: []
    };
  }

  onSearchChange = search => {
    let ingredients = [...this.state.listIngredients];
    ingredients.push( search );

    this.setState({  });
    console.log(ingredients);
  };
//con listIngredients no funciona



  addItem() {


  }



  render() {
    return (
      <div>
        <ReusableHeader title={this.headerTitle} />
      
          <Search onSearchChange={this.onSearchChange} />
    

        <div className="checkboxKitchen">
          <input type="checkbox" name="list" id="" value="Fridge" />
          Fridge
          <input type="checkbox" name="list" id="" value="Pantry" />
          Pantry
        </div>

        <a className="button is-primary buttonAdd">Add</a>
        <div className="tabs is-centered">
          <ul>
            {/* <li className="is-active"> */}
            <li className="non-active">
              <a>
                <span className="icon is-small">
                  <img
                    src="fridge.png"
                    alt=""
                    style={{ width: 200, height: 30 }}
                  />
                  {/* <i className="fas fa-image" aria-hidden="true" /> */}
                </span>
                <span>Fridge</span>
              </a>
            </li>
            <div className="listFridge">
              <ul>{/* <li>{this.props.list}</li> */}</ul>
            </div>

            <li>
              <a>
                <span className="icon is-small">
                  <img
                    src="pantry.png"
                    alt=""
                    style={{ width: 200, height: 30 }}
                  />
                  {/* <i className="fas fa-music" aria-hidden="true" /> */}
                </span>
                <span>Pantry</span>
              </a>
            </li>
          </ul>
        </div>

        {this.state.listIngredients.map(element => {
          return <p>{element}</p>;
        })}

        <MyFooter />
      </div>
    );
  }
}
