import React, { Component } from "react";
import "./MyFooter.css";
import { NavLink } from "react-router-dom";

export default class MyFooter extends Component {
  render() {

    return (
      <div>
        <div className="iconsFooter">
          <NavLink activeClassName="whiteIcon" to="/my-kitchen">
            <i className="fas fa-utensils fas-footer iconStyle changeColor" />
          </NavLink>

          <NavLink activeClassName="whiteIcon" to="/recipes">
            <i className="fas fa-book fas-footer iconStyle changeColor" />
          </NavLink>

          <NavLink activeClassName="whiteIcon" to="/my-shopping-list">
            <i className="fas fa-shopping-cart fas-footer iconStyle changeColor" />
          </NavLink>

          <NavLink activeClassName="whiteIcon" to="/my-profile">
            <i className="fas fa-user fas-footer iconStyle changeColor" />
          </NavLink>
        </div>
      </div>
    );
  }
}
