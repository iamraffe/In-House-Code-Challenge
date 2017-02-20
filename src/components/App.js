import React from 'react';
import { Column, Row, Title } from './index';
import AddContact from '../containers/AddContact';
import ContactListContainer from '../containers/ContactListContainer';
import Menu from '../components/Menu/Menu';

const App = () => (
  <Column className="app">
    <Menu />
    <Row><Title>Contact Book</Title></Row>
    <Row>
      <AddContact />
      <ContactListContainer />
    </Row>
  </Column>
);

export default App;
