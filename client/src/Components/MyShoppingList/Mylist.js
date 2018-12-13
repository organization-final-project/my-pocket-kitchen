import React, { Component } from 'react'
import './Mylist.css'

export default class Mylist extends Component {
    constructor(){
        super()
        this.Title="My shopping lists";
      }
  render() {
    return (
      <div>
        <h4 className="title-shopping-list">My shopping list</h4>
        <ul>
            <li>Huevos</li>
            <li>Patatas</li>
            <li>Brócoli</li>
            <li>Alcachofas</li>
        </ul>
      </div>
    )
  }
}
