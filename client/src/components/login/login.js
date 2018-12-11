import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default class login extends Component {
  render() {
    return (
      <div className="login">
        <form className="form">
          <input type="text" placeholder="Username" className="form__input" />
          <input type="password" placeholder="Password" className="form__input" />
          <button className="submit-button">Submit</button>
          <button className="btn" type="button">
            <Link to="/signup">Sign up</Link>
          </button>
        <fieldset> Hola qué tal</fieldset>
        </form>
      </div>
    );
  }
}
