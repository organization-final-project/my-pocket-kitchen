import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";
import ReusableHeader from "../ReusableHeader/ReusableHeader";

export default class MyKitchen extends Component {
  constructor() {
    super()
    this.headerTitle = "My kitchen"
  }

  render() {
    return (
      <div>
        <ReusableHeader title={this.headerTitle} />
        <MyFooter icons={[1, 2, 3, 7, 11]}/> 
      </div>
    );
  }
}
