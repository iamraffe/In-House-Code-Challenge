import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Button } from '../components/index';

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
    browserHistory.push('/');
  }

  render() {
    return (
    <div className={'contact-box'}>
      <form onSubmit={this.handleSubmit} className={"edit-form"}>
        <div>
          <label>
            Name:
          </label>
          <input
            name="name"
            type="text"
            value={this.state.contact.name}
            onChange={this.handleInputChange}
             />
         </div>
        <br />
        <div>
          <label>
            Phone:
          </label>
            <input
              name="phone"
              type="phone"
              value={this.state.contact.phone}
              onChange={this.handleInputChange}
              />
        </div>
        <br />
        <div>
          <label>
            Email:
          </label>
            <input
              name="email"
              type="email"
              value={this.state.contact.email}
              onChange={this.handleInputChange}
              />
        </div>
        <br />
        <div>
          <label>
            Favorite:
          </label>
            <input
              name="favorite"
              type="checkbox"
              checked={this.state.contact.favorite}
              onChange={this.handleInputChange}
              />
        </div>
        <Button className={"default"} label="Edit Contact" type="submit" />
      </form>
      <Button className={"default"} label="Back" onClick={(e) => {e.preventDefault(); browserHistory.goBack();}} />
    </div>

    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  editContactDispatch: PropTypes.func.isRequired
};

export default EditContact;
