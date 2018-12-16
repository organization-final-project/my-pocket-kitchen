import React, { Component } from 'react';
import MyFooter from '../Footer/MyFooter';
import ReusableHeader from '../ReusableHeader/ReusableHeader';
import DeleteMyProfile from './DeleteMyProfile'

export default class MyProfile extends Component {
  constructor(){
    super()
    this.headerTitle="My profile";
  }
  render() {
    return (
      <div>
         <ReusableHeader title={this.headerTitle} />
        

        <MyFooter />
      </div>
    )
  }
}
