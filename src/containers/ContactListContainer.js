import { connect } from 'react-redux';
import ContactList from '../components/ContactList';

const mapStateToProps = (state) => ({
  contacts: state.contacts
});

const mapDispatchToProps =  ({
  //onTodoClick: toggleTodo
});

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);

export default ContactListContainer;
