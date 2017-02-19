import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions';
import { Button } from '../components/index';

let AddContact = ({ dispatch }) => {
  let user = {};

  return (
    <div>
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
      <label>
        Name
      </label>
      <input ref={name => {
          user.name = name;
        }}  />
        <br />
          <label>
            Phone:
          </label>
        <input ref={phone => {
            user.phone = phone;
          }} label='phone' />
          <br />
            <label>
              Email:
            </label>
          <input ref={email => {
              user.email = email;
            }} label='email' />
            <br />
        <Button label="Add Contact" type="submit" />
      </form>
    </div>
  );
};
AddContact = connect()(AddContact);

export default AddContact
