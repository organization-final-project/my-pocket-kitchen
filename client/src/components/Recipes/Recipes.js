import React, { Component } from 'react';
import Search from "../search/Search";

import MyFooter from '../Footer/MyFooter';
export default class Recipes extends Component {
  render() {
    return (
      <div>
        <h1>Esta es la pagina de recipes</h1>
        <Search/>
        <MyFooter/>
      </div>
    )
  }
}
