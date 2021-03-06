import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import MyKitchen from "./components/MyKitchen/MyKitchen";
import Recipes from "./components/Recipes/Recipes";
import MyShoppingList from "./components/MyShoppingList/MyShoppingList";
import MyProfile from "./components/MyProfile/MyProfile";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import AuthService from "./components/auth/AuthService";
import { Redirect } from "react-router-dom";
import ReusableHeader from "./components/ReusableHeader/ReusableHeader";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
   
    };

    this.authService = new AuthService();
  }

  fetchUser = () => {
    this.authService.loggedin().then(user => {
      this.setState({ ...this.state, user });
    });
  };

  getUser = user => {
    this.props.history.push("/");
    this.setState({ ...this.state, user });
  };

  logout = () => {
    this.authService.logout().then(() => {
      this.props.history.push("/login");
      this.setState({ ...this.state, user: null });
    });
  };

  componentWillMount() {
    this.fetchUser();
  }

  

  render() {
    if (this.state.user) {
      return (
        <div className="App">
          <ReusableHeader logout={this.logout}  />

          {/* {this.state.user.username} */}
          <Switch>
            <Route
              path="/my-kitchen"
              render={() => <MyKitchen user={this.state.user}/>}
             
            />
            <Route path="/recipes" render={()=> <Recipes user = {this.state.user}/>} />
            <Route path="/my-shopping-list" render={()=> <MyShoppingList user={this.state.user}/>}/>
            <Route path="/my-profile" render ={()=>  <MyProfile user = {this.state.user} logout = {this.logout}/>} />
            <Route
              exact
              path="/"
              render={() =>
                this.state.user ? (
                  <Redirect to="/my-kitchen" />
                ) : (
                  <Login getUser={this.getUser} />
                )
              }
            />{" "}
            />
            <Route
              exact
              path="/signup"
              render={() =>
                this.state.user ? (
                  <Redirect to="/my-kitchen" />
                ) : (
                  <Signup getUser={this.getUser} />
                )
              }
            />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Login getUser={this.getUser} />}
            />{" "}
            />
            <Route
              exact
              path="/login"
              render={() => <Login getUser={this.getUser} />}
            />{" "}
            />
            <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getUser} />}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default withRouter(App);
