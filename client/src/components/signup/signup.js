import React, { Component } from 'react'
import './signup.css'
import { Link } from 'react-router-dom';

export default class signup extends Component {
  render() {
    return (
        <div className="login">
        <form className="form">
        <div className="form__group">
            <input type="text" placeholder="Username" className="form__input" />
        </div>
        <div className="form__group">
            <input type="password" placeholder="Password" className="form__input" />
        </div>
        <button>Submit</button>
        <button className="btn" type="button"><Link to='/'>Login</Link></button>
    </form>
      </div>
    )
  }
}
