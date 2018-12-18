import React, { Component } from "react";
// import MyFooter from "./Footer/MyFooter";
import "./ReusableHeader.css";

export default class ReusableHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="header">

        <img src="cocinero.png" alt="" style={{ height: 50, width: 40}} />
        <h3 id="title" style={{ paddingRight: 111, marginTop: 16 }}>{this.props.title}</h3>
        <i
          class="fas fa-sign-out-alt goOut"
          style={{ fontSize: 32, color: "#877C73", marginTop: 75 }}
          onClick={() => this.props.logout()}
        />
      </div>
    );
  }
}
