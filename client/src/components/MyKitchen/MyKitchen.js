import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";

export default class MyKitchen extends Component {
  render() {
    return (
      <div>
        <h1>Hola MyKitchen</h1>
        <div className="search">
          <span style={{ fontSize: 48, color: "black" }}>
            <i class="fas fa-search" />
          </span>
        </div>

        <MyFooter />
      </div>
    );
  }
}
