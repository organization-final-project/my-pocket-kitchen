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

  topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  render() {
    return (
      <div>
         <div className="card-profile-my-fav">
            <h1 className="title-fav-recipes">These are your favorite recipes</h1>
            {this.state.favRecipes.map(element => {
              return <div className="card-fav-recipe"><div><h3>{element.name}</h3><a className="button-go-fav-recipes" href={element.url}>Go</a></div><img src={element.img} alt="info-recipe" width="150vw" height="150vh"></img></div>;
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
          <i
          id="go-up-my-profile"
          className="fas fa-angle-up"
          onClick={() => this.topFunction()}
        />
        <MyFooter />
      </div>
    );
  }
}
