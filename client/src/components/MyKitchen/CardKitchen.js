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
            {/* <li className="is-active"> */}
            <li className="non-active">
              <a>
                <span className="icon is-small">
                  <img
                    src="fridge.png"
                    alt=""
                    style={{ width: 200, height: 30 }}
                  />
                  {/* <i className="fas fa-image" aria-hidden="true" /> */}
                </span>
                <span>Fridge</span>
              </a>
            </li>














            <li>
              <a>
                <span className="icon is-small">
                  <img
                    src="pantry.png"
                    alt=""
                    style={{ width: 200, height: 30 }}
                  />
                  {/* <i className="fas fa-music" aria-hidden="true" /> */}
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
