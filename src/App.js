import React, { Component } from "react";
import "./App.css";
import Newcontact from "./components/Newcontact";
import Form from "./components/Form";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          nameuser: "User1",
          surname: "Surname1",
          tel: "+380 XX XXX XX XX",
        },
        {
          id: 2,
          nameuser: "User2",
          surname: "Surname2",
          tel: "+380 XX XXX XX XX",
        },
        {
          id: 3,
          nameuser: "User3",
          surname: "Surname3",
          tel: "+380 XX XXX XX XX",
        },
      ],
      showForm: false,
    };
  }

  handlertoggleForm = (e) => {
    this.setState((state) => ({
      showForm: !state.showForm,
    }));
  };

  addContact = (nameuser, surname, tel) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { id: new Date().getTime(), nameuser, surname, tel },
      ],
    });
    this.handlertoggleForm();
  };

  deleteItem = (e) => {
    e.stopPropagation();
    let id = +e.target.id;
    const updateContact = this.state.contacts.filter((item) => item.id !== id);
    this.setState({
      contacts: updateContact,
    });
  };

  cancel = (e) => {
    this.setState({
      contacts: this.state.contacts,
    });
    this.handlertoggleForm();
  };

  render() {
    return (
      <div>
        <div>
          <h1 className="contact-title">My Contacts</h1>
          <Newcontact
            deleteItem={this.deleteItem}
            contacts={this.state.contacts}
          />
        </div>
        <div>
          <button
            className="add-form"
            form={this.state.showForm}
            onClick={this.handlertoggleForm}
          >
            Add a new contact
          </button>
          {this.state.showForm ? (
            <Form addсontact={this.addContact} cancel={this.cancel} />
          ) : undefined}
        </div>
      </div>   
    );
  }
}
