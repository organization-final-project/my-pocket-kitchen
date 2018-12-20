import React, { Component } from "react";
import './search.css'

export default class Search extends Component {
  changeHandler = (e) =>{
    this.props.onSearchChange(e.target.value)
  }

  render() {
    return (
      <div>
        <div className="search">
          <span style={{ fontSize: 38, color: "#877C73" }}>
            <i className="fas fa-search" />
          </span>
         
          <form className="form" id="addItemForm">
          <div className="control">
            <input
              className="input is-hovered searchBar searchIngKitchen"
              type="text"
              placeholder="Add ingredient..."
              onChange={this.changeHandler}
              id= "addInput"
            />
          </div>
          </form>
        </div>



      </div>
    );
  }
}
