import React, { Component } from 'react';
import MyFooter from '../Footer/MyFooter';
import Search from "../search/Search";
import ReusableHeader from '../ReusableHeader/ReusableHeader';

export default class MyProfile extends Component {
  constructor(){
    super()
    this.headerTitle="My profile";
  }
  render() {
    return (
      <div>
         <ReusableHeader title={this.headerTitle} />
        <Search/>
       

        <MyFooter/>
      </div>
    )
  }
}
