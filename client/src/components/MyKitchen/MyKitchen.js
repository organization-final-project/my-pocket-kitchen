import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";
import Search from "../search/Search";
import Logout from "../auth/Logout";

export default class MyKitchen extends Component {
  render() {
    return (
      <div>
        <h1>Hola MyKitchen</h1>
        <Search/>
{/* <Logout/> */}
        <MyFooter />
      </div>
    );
  }
}
