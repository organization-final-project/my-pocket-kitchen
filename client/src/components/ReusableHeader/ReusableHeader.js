import React, { Component } from "react";
// import MyFooter from "./Footer/MyFooter";
import "./ReusableHeader.css";

export default class ReusableHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="header">
        <div className="left">
        <img src="cocinero.png" alt="" style={{ height: 47, width: 38}} />
        <h3 id="title" style={{ paddingRight: 111, marginTop: 16 }}>{this.props.title}</h3>
        </div>
      
        <i
          class="fas fa-sign-out-alt goOut go-out-header"
          onClick={() => this.props.logout()}
        />
      </div>
    );
  }
}
