import React from 'react';
import { Column, Row, Title } from './index';
import ContactListContainer from '../containers/ContactListContainer';
import Menu from '../components/Menu/Menu';

const FavoritesPage = () => (
  <Column className="app">
    <Menu />
    <Row><Title>Favorite Contacts</Title></Row>
    <Row>
      <ContactListContainer filter="FAVORITES" />
    </Row>
  </Column>
);

export default FavoritesPage;
