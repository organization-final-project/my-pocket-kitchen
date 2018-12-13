import React, { Component } from 'react';
import Search from "../search/Search";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import axios from 'axios';
import MyFooter from "../Footer/MyFooter";

export default class Recipes extends Component {
  constructor() {
    super()
    this.headerTitle= "My recipes"
 

  }

  render() {
    return (
      <div>
         <ReusableHeader title={this.headerTitle}  />
        <Search/>
        <MyFooter/>

      </div>
    );
  }
}
