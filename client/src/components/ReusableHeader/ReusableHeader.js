import React, { Component } from "react";
// import MyFooter from "./Footer/MyFooter";
import './ReusableHeader.css'

export default class ReusableHeader extends Component {
  render() {
    return (
      <div className="header">
        <img src="cocinero.png" alt="" height="50px"/>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}
