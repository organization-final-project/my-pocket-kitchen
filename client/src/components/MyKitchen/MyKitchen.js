import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";
import Search from "../search/Search";
import Logout from "../auth/Logout";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import CardKitchen from "./CardKitchen"

export default class MyKitchen extends Component {
  constructor() {
    super()
    this.headerTitle = "My kitchen"
  }
  render() {
    return (
      <div>
         <ReusableHeader title={this.headerTitle} />
       
        <Search/>
        <CardKitchen/>
{/* <Logout/> */}
        <MyFooter />
      </div>
    );
  }
}
