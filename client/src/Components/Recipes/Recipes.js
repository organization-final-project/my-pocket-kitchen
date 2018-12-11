import React, { Component } from 'react';
import ReusableHeader from "../ReusableHeader/ReusableHeader";

import MyFooter from '../Footer/MyFooter';

export default class Recipes extends Component {
  constructor(){
    super()
    this.headerTitle="My recipes";
  }
  render() {
    return (
      <div>
        <ReusableHeader title={this.headerTitle} />
        <MyFooter/>
      </div>
    )
  }
}
