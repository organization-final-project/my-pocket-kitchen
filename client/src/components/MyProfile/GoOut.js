import React, { Component } from 'react'
import './GoOut.css'

export default class GoOut extends Component {
  render() {
    return (
      <div>
         <div className="delete-profile border">
       
       <p>Enough just for now...</p>
       <a href
         className="button is-primary buttonAdd deleteButton" style ={{color: "#42A9B6", backgroundColor: "white", border: "1px solid #42A9B6"}}>
         Go out
       </a>
       <i class="fas fa-sign-out-alt goOut" style={{ fontSize: 32, color: "#42A9B6"}}></i>
     </div>
      </div>
    )
  }
}
