import React, { Component } from "react";
import "./mock/contacts/Contacts.scss";
import Contact from "./mock/contacts/Contact";
import { contacts } from "./mock/contacts/contacts";

export default class Contacts extends Component {
  state = {
    title: "",
    contacts: contacts,
    maleButton: true,
    femButton: true,
    noGenButton: true,
  };

  switchStateFunction = (event) => {
    const { name } = event.target;
    if (
      name === "maleButton" ||
      name === "femButton" ||
      name === "noGenButton"
    ) {
      this.setState({ [name]: !this.state[name] });
    } else if (name === "title") {
      const { value } = event.target;
      this.setState({
        title: value,
      });
    }
  };

  checkGender = (gender) => {
    if (gender === "male") {
      return this.state.maleButton;
    } else if (gender === "female") {
      return this.state.femButton;
    } else if (gender === undefined) {
      return this.state.noGenButton;
    }
  };

  searchData = (userData) =>
    userData.toLowerCase().indexOf(this.state.title.toLowerCase()) !== -1;
  componentCheckUpdate = (usersArray) =>
    JSON.stringify(usersArray) !== JSON.stringify(this.state.contacts);

  componentDidUpdate() {
    const newContacts = contacts.filter(
      (el) =>
        (this.searchData(el.firstName) ||
          this.searchData(el.lastName) ||
          this.searchData(el.phone)) &&
        this.checkGender(el.gender)
    );
    if (this.componentCheckUpdate(newContacts)) {
      this.setState({
        contacts: newContacts,
      });
    }
  }

  render() {
    return (
      <div className="contacts">
        <div className="menu">
          <div className="menu-content">
            <input
              placeholder="Search..."
              name="title"
              maxLength="7"
              value={this.state.title}
              onChange={this.switchStateFunction}
            />
            <div className="buttons">
              <button
                name="maleButton"
                className={
                  this.state.maleButton ? "deactivatedButton" : "activeButton"
                }
                onClick={this.switchStateFunction}
              >
                M
              </button>
              <button
                name="femButton"
                className={
                  this.state.femButton ? "deactivatedButton" : "activeButton"
                }
                onClick={this.switchStateFunction}
              >
                F
              </button>
              <button
                name="noGenButton"
                className={
                  this.state.noGenButton ? "deactivatedButton" : "activeButton"
                }
                onClick={this.switchStateFunction}
              >
                ?
              </button>
            </div>
          </div>
        </div>

        {this.state.contacts.map((contact) => {
          return (
            <Contact
              key={contact.phone}
              firstName={contact.firstName}
              lastName={contact.lastName}
              phone={contact.phone}
              gender={contact.gender}
              avatar={contact.avatar}
            />
          );
        })}
      </div>
    );
  }
}
