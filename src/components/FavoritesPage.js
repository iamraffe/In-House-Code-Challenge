import React from 'react';
import { Column, Row, Title } from './index';
import ContactListContainer from '../containers/ContactListContainer';

/*const onAddClick = (event) => {
   event.preventDefault();
};*/

const App = ({ dispatch }) => (
  <Column className="app">
    <Row><Title>Favorite Contacts</Title></Row>
    <Row>
      <ContactListContainer filter='FAVORITES' />
    </Row>
  </Column>
);

export default App;
