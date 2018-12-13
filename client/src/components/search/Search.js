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
          <span style={{ fontSize: 48, color: "black" }}>
            <i className="fas fa-search" />
          </span>

          <div className="control">
            <input
              className="input is-hovered "
              type="text"
              placeholder="Search the ingredient"
              onChange={this.changeHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}
