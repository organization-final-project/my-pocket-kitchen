import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";
import "./MyProfile.css";
import AuthService from "../auth/AuthService";

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favRecipes: null
    };
    this.authService = new AuthService();
  }

  componentDidMount = () => {
    document.getElementById("title").innerHTML = "My Profile";
  };
  componentWillMount = () => {
    this.setState({ ...this.state, favRecipes: this.props.user.favRecipes });
  };
  deleteUser = () => {
    this.authService.delete(this.props.user);
    this.props.logout();
  };
  render() {
    console.log(this.state.favRecipes);
    return (
      <div>
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
          <div>
            <h1>This are your favorite Recipes</h1>
            {this.state.favRecipes.map(element => {
              return <h1>{element.name}</h1>;
            })}
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
