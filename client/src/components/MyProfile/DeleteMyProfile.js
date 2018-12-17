import React, { Component } from 'react'
import './DeleteMyProfile.css'

export default class DeleteMyProfile extends Component {
  render() {
    return (
      <div className="delete-profile">
       
        <p>Tired of being productive with your weekly shopping?</p>
        <a href
          className="button is-primary buttonAdd deleteButton" style ={{color: "red", backgroundColor: "white", border: "1px solid red"}}>
          Delete my profile
        </a>
        <i class="fas fa-sad-tear"  style={{ fontSize: 32, color: "#42A9B6"}}></i>
      </div>
    )
  }
}
