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
        <h1>esta es la pagina del perfil</h1>
        <Search/>
        <ReusableHeader title={this.headerTitle} />

        <MyFooter/>
      </div>
    )
  }
}
