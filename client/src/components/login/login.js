import React, { Component } from 'react'
import './login.css'
import { Link } from 'react-router-dom';

export default class login extends Component {
  render() {
    return (
      <div className="login">
        <form class="form">
        <div class="form__group">
            <input type="text" placeholder="Username" class="form__input" />
        </div>
        <div class="form__group">
            <input type="password" placeholder="Password" class="form__input" />
        </div>
        <button>Submit</button>
        <button class="btn" type="button"><Link to='/signup'>Sign up</Link></button>
    </form>
      </div>
    )
  }
}
