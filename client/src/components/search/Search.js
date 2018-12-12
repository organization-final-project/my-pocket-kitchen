import React, { Component } from "react";
import './search.css'




export default class Search extends Component {
  render() {
    return (
      <div>
        <div className="search">
          <span style={{ fontSize: 48, color: "black" }}>
            <i class="fas fa-search" />
          </span>

          <div class="control">
            <input
              class="input is-hovered "
              type="text"
              placeholder="Search the ingredient"
            />
          </div>
        </div>
      </div>
    );
  }
}
