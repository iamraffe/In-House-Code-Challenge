import React from 'react';
import { Column, Row, Title } from './index';
import AddContact from '../containers/AddContact';
import ContactListContainer from '../containers/ContactListContainer';

//const App = ({ dispatch }) => (
const App = () => (
  <Column className="app">
    <Row><Title>Contact Book</Title></Row>

    <Row>
      <AddContact />
      <ContactListContainer />
    </Row>
  </Column>
);

export default App;
