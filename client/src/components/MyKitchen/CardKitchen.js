import React, { Component } from "react";

export default class CardKitchen extends Component {
  render() {
    return (
      <div>
        <div className="checkboxKitchen">
          <input type="checkbox" name="list" id="" value="Fridge" />
          Fridge
          <input type="checkbox" name="list" id="" value="Pantry" />
          Pantry
        </div>
        <div className="tabs is-centered">
          <ul>
            <li className="non-active">
              <a>
                <span className="icon is-small">
                  <img
                    src="fridge.png"
                    alt=""
                    style={{ width: 200, height: 30 }}
                  />
                </span>
                <span>Fridge</span>
              </a>
            </li>
            <div className="listFridge">
              <ul>
              </ul>
            </div>

            <li>
              <a>
                <span className="icon is-small">
                  <img
                    src="pantry.png"
                    alt=""
                    style={{ width: 200, height: 30 }}
                  />
                </span>
                <span>Pantry</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
