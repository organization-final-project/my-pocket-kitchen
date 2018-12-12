import React, { Component } from 'react';
import MyFooter from '../Footer/MyFooter';
import Search from "../search/Search";

export default class MyProfile extends Component {
  render() {
    return (
      <div>
        <h1>esta es la pagina del perfil</h1>
        <Search/>
        <MyFooter/>
      </div>
    )
  }
}
