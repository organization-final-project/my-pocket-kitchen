import React, { Component } from "react";
// import MyFooter from '../src/Components/Footer/MyFooter';
import { Route, Switch } from "react-router-dom";
import MyKitchen from "./components/MyKitchen/MyKitchen";
import Recipes from "./components/Recipes/Recipes";
import MyShoppingList from "./components/MyShoppingList/MyShoppingList";
import MyProfile from "./components/MyProfile/MyProfile";

import "./App.css";


import login from "./components/login/login";
import signup from "./components/signup/signup";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path="/my-kitchen" component={MyKitchen} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/my-shopping-list" component={MyShoppingList} />
          <Route exact path="/my-profile" component={MyProfile} />
          <Route exact path="/" component={login} />
          <Route path="/signup" component={signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
