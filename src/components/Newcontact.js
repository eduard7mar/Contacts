import React, { Component } from "react";

export default class Newcontact extends Component {
  renderTableData = () => {
    return this.props.contacts.map((contact, index) => {
      const { id, nameuser, surname, tel } = contact;
      return (
        <tr key={id}>
          <td>{nameuser}</td>
          <td>{surname}</td>
          <td>{tel}</td>
          <td>
            <button id={id} onClick={this.props.deleteItem} className="btn-del">
              Delete user
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <>
        <table className="contact-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone number</th>
              <th>Delete user</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </>
    );
  }
}
