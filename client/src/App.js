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
import Message from "./components/Message";



import "./App.css";



class App extends Component {

  constructor() {
    super();

    this.state = {
      user: null
    };

    this.authService = new AuthService();

    this.fetchUser();
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
      this.authService
        .logout()
        .then(() => this.setState({ ...this.state, user: null }));
      };

    

 render() {
  const welcome = this.state.user ? (
    <div>
      <p>Hola {this.state.user.username}</p>
      <button onClick={this.logout}>Logout</button>
    </div>
  ) : (
    <div>
      <p>No user</p>
      <Link to="/">Home</Link> - <Link to="/signup">Signup</Link> -{" "}
      <Link to="/login">Login</Link>
    </div>
  );
   return (
     <div className="App">
     
        {welcome}
        <Message user={this.state.user} />

       <Switch>
         <Route exact path="/my-kitchen" component={MyKitchen} />
         <Route exact path="/recipes" component={Recipes} />
         <Route exact path="/my-shopping-list" component={MyShoppingList} />
         <Route exact path="/my-profile" component={MyProfile} />
         <Route exact path="/" component={Login} />
         <Route path="/signup" component={Signup} />
       </Switch>
     </div>
   );
 }
   
}

export default App;