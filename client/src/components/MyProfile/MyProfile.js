import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import "./MyProfile.css";
import AuthService from '../auth/AuthService'

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.headerTitle = "My profile";
    
    this.authService = new AuthService();
  }
  
deleteUser = () =>{
  this.authService.delete(this.props.user)
  this.props.logout()
}
  render() {
    return (
      <div>
        <ReusableHeader title={this.headerTitle} />
        <div className="go-and-delete">
          <div className="delete-profile border card-profile">
            <p>Enough just for now...</p>
            <a
              href
              className="button is-primary buttonAdd deleteButton"
              style={{
                color: "white",
                backgroundColor: "#877C73",
                border: "1px solid #877C73"
              }}
              onClick={() => this.props.logout()}
            >
              Go out
            </a>
            <i
              class="fas fa-sign-out-alt goOut"
              style={{ fontSize: 32, color: "#877C73" }}
            />
          </div>

          <div className="delete-profile card-profile">
            <p>Tired of being productive?</p>
            <a
              href
              className="button is-primary buttonAdd deleteButton"
              style={{
                color: "red",
                backgroundColor: "white",
                border: "1px solid red"
              }}
              onClick={() => this.deleteUser()}
            >
              Delete my profile
            </a>
            <i
              class="fas fa-sad-tear"
              style={{ fontSize: 32, color: "#877C73" }}
            />
          </div>
        </div>
        <MyFooter />
      </div>
    );
  }
}
