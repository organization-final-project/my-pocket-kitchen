import React, { Component } from "react";
import MyFooter from "../Footer/MyFooter";
import Search from "../search/Search";
import "./MyKitchen.css";
import AuthService from "../auth/AuthService";

export default class MyKitchen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.user._id,
      listIngPantry: this.props.user.listPantry,
      listIngFridge: this.props.user.listFridge, 
      showList: null
    };
    this.authService = new AuthService();
  }

  onSearchChange = event => {
    document.getElementsByClassName("searchIngKitchen").innerHTML = event;
  };

  addItem = () => {
    let itemSearch = document.getElementsByClassName("searchIngKitchen")
      .innerHTML;
    let checkedFridge = document.getElementById("checkFridge");
    let checkedPantry = document.getElementById("checkPantry");

    if (checkedFridge.checked) {
      this.state.listIngFridge.push(itemSearch);
      this.setState({ ...this.state, listIngPantry: this.state.listIngPantry });
      checkedFridge.checked = false;
    } else if (checkedPantry.checked) {
      this.state.listIngPantry.push(itemSearch);
      this.setState({ ...this.state, listIngFridge: this.state.listIngFridge });
      checkedPantry.checked = false;
    }
  };

  deleteItem = e => {
    let indexRemoveFridge = this.state.listIngFridge;
    indexRemoveFridge.splice(e, 1);
    this.setState({ ...this.state, listIngFridge: this.state.listIngFridge });

    let indexRemovePantry = this.state.listIngPantry;
    indexRemovePantry.splice(e, 1);
    this.setState({ ...this.state, listIngPantry: this.state.listIngPantry });
  };

  changeMenu = e => {
    if (e.target.innerHTML === "Fridge") {
      document.getElementsByClassName('menuPantry')[0].style ="background: white"
      document.getElementsByClassName('menuFridge')[0].style ="background: #f4eae1"
      this.setState({...this.state, showList:this.state.listIngFridge})
    } else {
      document.getElementsByClassName('menuFridge')[0].style ="background: white"
      document.getElementsByClassName('menuPantry')[0].style ="background: #f4eae1"
      this.setState({...this.state, showList:this.state.listIngPantry})
    }
  };

  componentDidMount = () => {
    document.getElementById("title").innerHTML = "My Kitchen";
    document.getElementsByClassName('menuFridge')[0].style ="background: #f4eae1"
  };
  componentWillMount=()=>{
   
    this.setState({...this.state, showList:this.state.listIngFridge})

  }

  addListToDB = () => {
    const { listIngFridge, listIngPantry, userID } = this.state;

    this.authService.myKitchen({ listIngFridge, listIngPantry, userID });
  };

  render() {
   
    return (
      <div>
        <Search onSearchChange={search => this.onSearchChange(search)} />

        <div className="checkboxKitchen">
          <input
            type="checkbox"
            name="list"
            id="checkFridge"
            value="Fridge"
            onCLick={e => this.clickCheckbox(e)}
          />
          Fridge
          <input
            type="checkbox"
            name="list"
            id="checkPantry"
            value="Pantry"
            onCLick={e => this.clickCheckbox(e)}
          />
          Pantry
        </div>

        <a
          href
          className="button is-primary buttonAdd buttonMyKitchen"
          onClick={event => this.addItem(event)}
        >
          Add
        </a>

        <section className="sectionMenu">
          <div className="tabs is-centered">
            <ul>
              <li className="activeMenu">
                <a
                  href
                  className="menuFridge"
                  onClick={e => {
                    this.changeMenu(e);
                  }}
                >
                  <span className="icon is-small">
                    <img
                      src="fridge.png"
                      alt=""
                      style={{ width: 200, height: 30 }}
                    />
                  </span>
                  <span className="colorTextKitchen">Fridge</span>
                </a>
              </li>
              <div className="listPantry" />

              <li>
                <a
                  href
                  className="menuPantry"
                  onClick={e => {
                    this.changeMenu(e);
                  }}
                >
                  <span className="icon is-small">
                    <img
                      src="pantry.png"
                      alt=""
                      style={{ width: 200, height: 30 }}
                    />
                  </span>
                  <span className="colorTextKitchen">Pantry</span>
                </a>
              </li>
              <div className="listFridge" />
            </ul>
          </div>

          <section className="sectionIngredient">
            <div className="FridgeIngredient">
              <div>
                {this.state.showList.map((element, index) => {
                  return (
                    <li class="listElem">
                      {element}
                      <i
                        className="fas fa-trash-alt"
                        style={{ fontSize: 18, color: "#877C73" }}
                        onClick={e => this.deleteItem(index)}
                        key={index}
                      />
                    </li>
                  );
                })}
              </div>
            </div>

          </section>
          <a href
            className="button is-primary buttonAdd save"
            type="submit"
            onClick={() => {
              this.addListToDB();
            }}
          >
            {" "}
            Save The List
          </a>
          <MyFooter />
        </section>
      </div>
    );
  }
}
