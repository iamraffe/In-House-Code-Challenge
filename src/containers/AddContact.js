import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions';
import { Button } from '../components/index';
import './add-contact.scss';

let AddContact = ({ dispatch }) => {
  let user = {};

  return (
    <div className={'contact-box'}>
      <form onSubmit={e => {
        e.preventDefault();
        if (!user.name.value.trim() && !user.phone.value.trim() && !user.email.value.trim() ) {
          return;
        }
        dispatch(addContact(user.name.value, user.phone.value, user.email.value));
        user.name.value = '';
        user.phone.value = '';
        user.email.value = '';
      }}>
      <div>
        <label>
          Name:
        </label>
        <input ref={name => {
            user.name = name;
          }}  />
      </div>
      <br />
      <div>
        <label>
          Phone:
        </label>
        <input ref={phone => {
            user.phone = phone;
          }} />
      </div>
      <br />
      <div>
        <label>
          Email:
        </label>
          <input ref={email => {
              user.email = email;
            }} />
      </div>
      <br />
        <Button className={"default"} label="Add Contact" type="submit" />
      </form>
    </div>
  );
};
AddContact = connect()(AddContact);

export default AddContact;
