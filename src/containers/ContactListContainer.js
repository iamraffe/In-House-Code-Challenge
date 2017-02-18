import { connect } from 'react-redux';
import { toggleFavorite } from '../actions';
import ContactList from '../components/ContactList';

const mapStateToProps = (state) => ({
  contacts: state.contacts
});

const mapDispatchToProps =  ({
  onToggleFavorite: toggleFavorite
});

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);

export default ContactListContainer;
