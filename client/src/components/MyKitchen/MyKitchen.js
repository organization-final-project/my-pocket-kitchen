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
      listIngPantry: ["pantry"],
      listIngFridge: ["fridge"]
    };
  }

  onSearchChange = event => {
    document.getElementsByClassName("searchIngKitchen").innerHTML = event;
  };

  addItem = () => {
    let itemSearch = document.getElementsByClassName("searchIngKitchen")
      .innerHTML;
    let checkedFridge = document.getElementById("checkFridge");
    let checkedPantry = document.getElementById("checkPantry");

    if (checkedFridge.checked) {
      this.state.listIngFridge.push(itemSearch);
      this.setState({ ...this.state, listIngPantry: this.state.listIngPantry });
      
    } else if (checkedPantry.checked) {
      this.state.listIngPantry.push(itemSearch);

      this.setState({ ...this.state, listIngFridge: this.state.listIngFridge });

    }
  };

  deleteItem = e => {
    let indexRemoveFridge = this.state.listIngFridge;
    indexRemoveFridge.splice(e, 1);
    this.setState({ ...this.state, listIngFridge: this.state.listIngFridge });

    let indexRemovePantry = this.state.listIngPantry;
    indexRemovePantry.splice(e, 1);
    this.setState({ ...this.state, listIngPantry: this.state.listIngPantry });
  };

  render() {
    return (
      <div>
        <ReusableHeader title={this.headerTitle} />

        <Search onSearchChange={search => this.onSearchChange(search)} />

        <div className="checkboxKitchen">
          <input
            type="checkbox"
            name="list"
            id="checkFridge"
            value="Fridge"
            onCLick={e => this.clickCheckbox(e)}
          />
          Fridge
          <input
            type="checkbox"
            name="list"
            id="checkPantry"
            value="Pantry"
            onCLick={e => this.clickCheckbox(e)}
          />
          Pantry
        </div>

        <a
          class="button is-primary buttonAdd"
          onClick={event => this.addItem(event)}
        >
          Add
        </a>
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
            <div className="listPantry" />

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
            <div className="listFridge" />
          </ul>
        </div>

        <section className="sectionIngredient">
          <div className="FridgeIgredient">
            <div>
              {this.state.listIngFridge.map((element, index) => {
                return (
                  <li class="listElem">
                    {element}
                    <i
                      className="fas fa-trash-alt"
                      style={{ fontSize: 15, color: "#42A9B6" }}
                      onClick={e => this.deleteItem(index)}
                      key={index}
                    />
                  </li>
                );
              })}
            </div>
          </div>

          <div className="PantryIngredient">
            <div>
              {this.state.listIngPantry.map((element, index) => {
                return (
                  <li class="listElem">
                    {element}
                    <i
                      className="fas fa-trash-alt"
                      style={{ fontSize: 15, color: "#42A9B6" }}
                      onClick={e => this.deleteItem(index)}
                      key={index}
                    />
                  </li>
                );
              })}
            </div>
          </div>
        </section>

        <MyFooter />
      </div>
    );
  }
}
