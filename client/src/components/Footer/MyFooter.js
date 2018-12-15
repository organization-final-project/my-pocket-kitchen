import React, { Component } from "react";
import "./MyFooter.css";
import { Link } from "react-router-dom";

export default class MyFooter extends Component {
  render() {
    return (
      <div>
        <div className="iconsFooter">
          <Link to="/my-kitchen">
            <i className="fas fa-utensils" style={{ fontSize: 35,color: "black"}}/>
          </Link>
          <Link to="/recipes">
          <i className="fas fa-book" style={{ fontSize: 35,color: "black"}}></i>
          </Link>
          <Link to="/my-shopping-list">
          <i className="fas fa-shopping-cart" style={{ fontSize: 35, color: "black"}}></i>
          </Link>
          <Link to="/my-profile">
          <i className="fas fa-user" style={{ fontSize: 35,color: "black"}}></i>
          </Link>
        </div>
      </div>
    );
  }
}
