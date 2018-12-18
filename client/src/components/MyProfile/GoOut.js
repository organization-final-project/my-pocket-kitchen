import React, { Component } from 'react'
import './GoOut.css'
import { Link } from 'react-router-dom'

export default class GoOut extends Component {
  constructor(props){
    super(props)
    this.headerTitle="My profile";
  }
  render() {
    console.log(this.props)
    return (
     
      <div>
         <div className="delete-profile border card-profile">
       
       <p>Enough just for now...</p>
      <a href='/'
         className="button is-primary buttonAdd deleteButton" style ={{color: "#877C73", backgroundColor: "white", border: "1px solid #877C73"}} onClick={()=>this.props.logout()}>
         Go out
       </a> 
       <i class="fas fa-sign-out-alt goOut" style={{ fontSize: 32, color: "#877C73"}}></i>
       
     </div>
      </div>
      
    )
  }
}
