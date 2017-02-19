import React, { Component, PropTypes } from 'react';
//import { connect } from 'react-redux';
//import { editContact } from '../actions';

export default class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact,
    };
  }
    handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form >
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.contact.name}
            onChange={this.handleChange}
             />
        </label>
        <br />
        <label>
          Phone:
          <input
            name="phone"
            type="phone"
            value={this.state.contact.phone}
            onChange={this.handleChange}
            />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={this.state.contact.email}
            onChange={this.handleChange}
            />
        </label>
        <br />
          <label>
            Favorite:
            <input
              name="favorite"
              type="checkbox"
              checked={this.state.contact.favorite}
              onChange={this.handleChange}
              />
          </label>
        <button type="submit">
          Edit Contact
        </button>
      </form>
    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
};
