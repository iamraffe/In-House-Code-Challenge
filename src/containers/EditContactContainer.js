import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { editContact } from '../actions';
import EditContact from '../components/EditContact';

const mapStateToProps = (state, ownProps) => {
    debugger;
    return {contact: state.contacts.find( contact => contact.id === parseInt(ownProps.params.id))};
};

const mapDispatchToProps =  ({
  onSubmit: editContact
});

const EditContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContact);

export default EditContactContainer;
