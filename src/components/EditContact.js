import React, { Component, PropTypes } from 'react';

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const newContact = Object.assign({}, this.state.contact, {[event.target.name]: value});
    this.setState({contact: newContact});
  }

  handleSubmit(event){
    event.preventDefault();
    const contact = this.state.contact;
    this.props.editContactDispatch(contact.id, contact.name, contact.phone, contact.email, contact.favorite);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.contact.name}
            onChange={this.handleInputChange}
             />
        </label>
        <br />
        <label>
          Phone:
          <input
            name="phone"
            type="phone"
            value={this.state.contact.phone}
            onChange={this.handleInputChange}
            />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={this.state.contact.email}
            onChange={this.handleInputChange}
            />
        </label>
        <br />
          <label>
            Favorite:
            <input
              name="favorite"
              type="checkbox"
              checked={this.state.contact.favorite}
              onChange={this.handleInputChange}
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
  editContactDispatch: PropTypes.func.isRequired
};

export default EditContact;
