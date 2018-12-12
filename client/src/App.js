import React, { Component } from "react";
// import MyFooter from '../src/Components/Footer/MyFooter';
import { Route, Switch, Link } from "react-router-dom";
import MyKitchen from "./components/MyKitchen/MyKitchen";
import Recipes from "./components/Recipes/Recipes";
import MyShoppingList from "./components/MyShoppingList/MyShoppingList";
import MyProfile from "./components/MyProfile/MyProfile";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import AuthService from "./components/auth/AuthService";
import { Redirect } from "react-router-dom";
// import Message from "./components/Message";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };

    this.authService = new AuthService();
  }

  fetchUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  getUser = user => {
    this.setState({ ...this.state, user });
  };
  logout = () => {
    console.log("logout")
    this.authService
      .logout()
      .then(() => this.setState({ ...this.state, user: null }));
  };

  componentWillMount(){
    this.fetchUser();
  }

  render() {
    if (this.state.user) {
      return (
        
        <div className="App">
        {this.state.user.username}
          <Switch>
            <Route path="/my-kitchen" component={MyKitchen} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/my-shopping-list" component={MyShoppingList} />
            <Route path="/my-profile" component={MyProfile} />
            <Route
              exact
              path="/"
              render={() =>
                this.state.user ? <Redirect to="/my-kitchen" />  : <Signup getUser={this.getUser}  />
              }
            />{" "}
            />
            <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getUser} />}
            />
          </Switch>
          <button onClick={()=>this.logout()}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="App">
          {/* {welcome}
         <Message user={this.state.user} /> */}
<p>bo user</p>
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                 <Signup getUser={this.getUser}/>
              }
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

export default App;
