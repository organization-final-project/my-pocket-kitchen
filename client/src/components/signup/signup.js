import React, { Component } from 'react'
import './signup.css'
import { Link } from 'react-router-dom';

export default class signup extends Component {
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
        <button class="btn" type="button"><Link to='/'>Login</Link></button>
    </form>
      </div>
    )
  }
}
