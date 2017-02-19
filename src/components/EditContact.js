import React, { Component, PropTypes } from 'react';
//import { connect } from 'react-redux';
//import { editContact } from '../actions';

export default class EditContact extends Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      contact: props.contact,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {

 }
  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
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
             />
        </label>
        <br />
        <label>
          Phone:
          <input
            name="email"
            type="email"
            value={this.state.contact.email} />
        </label>
        <br />
        <label>
          Phone:
          <input
            name="phone"
            type="text"
            value={this.state.contact.phone} />
        </label>
        <br />
          <label>
            Favorite:
            <input
              name="favorite"
              type="checkbox"
              checked={this.state.contact.favorite}
              />
          </label>
        <button type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
};
