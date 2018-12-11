import React, { Component } from "react";
import "./MyFooter.css";
import { Link } from "react-router-dom";

export default class MyFooter extends Component {
  render() {
    return (
      <div>
        <div className = "caja">
        
        <div className="iconsFooter">
          <Link to="/my-kitchen">
            <img src="kitchen.png" alt="" height="50px" width="50px" />{" "}
          </Link>
          <Link to="/recipes"><img src="icon-recipe.png" alt="" height="50px" width="50px" /></Link>
          <Link to="/my-shopping-list"><img src="shoppigCart.png" alt="" height="50px" width="50px" /></Link>
          <Link to="/my-profile"> <img src="profile.png" alt="" height="50px" width="50px" /></Link>
        </div>
      </div>
      </div>
    );
  }
}


