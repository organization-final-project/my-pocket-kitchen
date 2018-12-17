import React, { Component } from 'react';
import AuthService from './AuthService';
import { Link } from "react-router-dom";
import './Login.css'
import CardInformation from './CardInformation'

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }

    this.authService = new AuthService();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const {username, password} = this.state;

    this.authService.login({username, password})
    .then(user => this.props.getUser(user));
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  }

  render() {

    
    return (
      <div className="login">
      <img className="logo" src="logo-provisional.png" alt=""/>
      <form className="form" onSubmit={this.handleFormSubmit}>
        <input type="text" placeholder="Username" className="form__input" onChange={e => this.handleChange(e)} />
        <input type="password" placeholder="Password" className="form__input" onChange={e => this.handleChange(e)} />
        
        
        <button className="submit-button"  onClick={()=>this.props.getUser(this.state)} value= "Login"    >Submit</button>
        <button className="btn" type="button">
          <Link to="/signup"><u>Or sign up</u></Link>
        </button>
      </form>
      <CardInformation />
    </div>
    )
  }
}