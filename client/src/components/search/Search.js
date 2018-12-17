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
          <span style={{ fontSize: 38, color: "black" }}>
            <i class="fas fa-search" />
          </span>
         
          <form className="form" id="addItemForm">
          <div className="control">
            <input
              className="input is-hovered searchBar"
              type="text"
              placeholder="Search..."
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
