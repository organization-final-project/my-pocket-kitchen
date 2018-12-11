import React, { Component } from "react";
// import MyFooter from '../src/Components/Footer/MyFooter';
import { Route, Switch } from "react-router-dom";
import MyKitchen from "../src/Components/MyKitchen/MyKitchen";
import Recipes from "../src/Components/Recipes/Recipes";
import MyShoppingList from "../src/Components/MyShoppingList/MyShoppingList";
import MyProfile from "../src/Components/MyProfile/MyProfile";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hola desde App</h1>

        <Switch>
          <Route exact path="/my-kitchen" component={MyKitchen} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/my-shopping-list" component={MyShoppingList} />
          <Route exact path="/my-profile" component={MyProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
