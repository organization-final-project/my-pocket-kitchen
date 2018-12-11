import React, { Component } from 'react';
import AuthService from './AuthService';
import {Redirect} from "react-router-dom";
import { Link } from "react-router-dom";
import '../signup/signup.css'

export default class Signup extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      redirect: false
    }

    this.authService = new AuthService();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const {username, password} = this.state;

    this.authService.signup({username, password})
    .then(user => {
      this.props.getUser(user)
      this.setState({username: '', password: '', redirect: true})
    });
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  }

  render() {
    if(this.state && this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <div className="login">
      <form className="form" onSubmit={this.handleFormSubmit}>
      <div className="form__group">
          <input type="text" placeholder="Username" className="form__input" onChange={e => this.handleChange(e)} />
      </div>
      <div className="form__group">
          <input type="password" placeholder="Password" className="form__input" onChange={e => this.handleChange(e)}/>
      </div>
      <button>Submit</button>
      <button className="btn" type="button"><Link to='/'>Login</Link></button>
  </form>
    </div>
    )
  }
}