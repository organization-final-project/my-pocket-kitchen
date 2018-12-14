import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";
import Search from "../search/Search";
import Logout from "../auth/Logout";
import ReusableHeader from "../ReusableHeader/ReusableHeader";
import CardKitchen from "./CardKitchen";
import "./MyKitchen.css";

export default class MyKitchen extends Component {
  constructor() {
    super();
    this.headerTitle = "My kitchen";
    this.state = {
      listIngredients: [],
      searchItem: undefined
    };
    this.addItem = this.addItem.bind(this);
  }

  onSearchChange(search) {
    console.log(search);

    // this.setState({...this.state, searchItem: search})
  }

  addItem(e) {
    e.preventDefault();

    // let search = this.state.searchItem

    // axios.post(apiURL, {searchedItem: search})

    //todo: recuerda que luego vas a tener que leer via axios.get esta asociacion que estas creando entre usuario y elemento de busqueda. asi ccuando recargues la aplicacion podras cargar arroz directamente y te saldra (esto se llama persistencia)
    //esto se cubra en la parte de autenticacion / session ya que mi session id la puedes usar para saber quien soy yo, mi userid y asociar mi userid a un searchitem como arroz
    //esto debe de poder ser solicitado / interrogado desde el front via axios.get 






    // const list = this.state.listIngredients;
    // const newIngredient = document.getElementById("addInput");
    // const form = document.getElementById("addItemForm");

    // if (newIngredient.value != "") {
    //   list.push(newIngredient.value);

    //   this.setState({
    //     listIngredients: list
    //   });
    //   newIngredient.classList.remove("is-danger");
    //   form.reset();
    // } else {
    //   newIngredient.classList.add("is-danger");
    // }
  }

  render() {
    return (
      <div>
        <ReusableHeader title={this.headerTitle} />
        <div className="searchButton">
          <Search onSearchChange={this.onSearchChange} />
          <a class="button is-primary buttonAdd" onClick={this.addItem}>
            Add
          </a>
        </div>

        <CardKitchen />
        {/* <Logout/> */}
        <MyFooter />
      </div>
    );
  }
}
