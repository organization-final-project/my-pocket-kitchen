import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import login from './components/login/login'
import signup from './components/signup/signup'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
       <Route exact path='/' component={login}/>
       <Route path='/signup' component={signup}/>
       </Switch>

      </div>
    );
  }
}

export default App;
