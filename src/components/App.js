import React from 'react';
import { Column, Row, Title, Button } from './index';
import AddContact from '../containers/AddContact';
import ContactListContainer from '../containers/ContactListContainer';

/*const onAddClick = (event) => {
   event.preventDefault();
};*/

const App = ({ dispatch }) => (
  <Column className="app">
    <Row><Title>Contact Book</Title></Row>

    <Row>
      <AddContact />
      <ContactListContainer />
      {/*<Button label="Add Contact" onClick={onAddClick} />
      <ContactList />
        */}
    </Row>
  </Column>
);

export default App;
