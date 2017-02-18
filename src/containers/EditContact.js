import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { editContact } from '../actions';

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
        name: props.name,
        phone: props.phone,
        email: props.email,
        favorite: props.favorite
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
            value={this.state.user.name}
             />
        </label>
        <br />
        <label>
          Phone:
          <input
            name="email"
            type="email"
            value={this.state.user.email} />
        </label>
        <br />
        <label>
          Phone:
          <input
            name="phone"
            type="text"
            value={this.state.user.phone} />
        </label>
        <br />
          <label>
            Favorite:
            <input
              name="favorite"
              type="checkbox"
              checked={this.state.favorite}
              onChange={this.handleInputChange} />
          </label>
        <button type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

EditContact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,

  dispatch: PropTypes.func.isRequired
};

connect()(editContact);

export default EditContact;
