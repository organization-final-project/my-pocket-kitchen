import React, { Component } from "react";
import AuthService from "./AuthService";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
      // redirect: false
    };

    this.authService = new AuthService();
  }

  handleFormSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    this.authService.signup({ username, password }).then(receivedUser => {
      this.props.getUser(receivedUser);
      this.setState({ username: "", password: "" });
    });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    if (this.state && this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login">
        <img className="logo" src="logo-provisional.png" alt="" />
        <form className="form" onSubmit={this.handleFormSubmit}>
  
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form__input"
              onChange={e => this.handleChange(e)}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form__input"
              onChange={e => this.handleChange(e)}
            />
      
          <button className="submit-button" onClick={() => this.props.getUser(this.state)} value="Singup">Submit</button>
          <button className="btn" type="button">
            <Link to="/">Or login</Link>
          </button>
        </form>
      </div>
    );
  }
}
