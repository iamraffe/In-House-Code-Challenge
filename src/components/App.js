import React from 'react';
import { Column, Row, Title, Button } from './index';

const onAddClick = (event) => {
}

const App = () => (
  <Column className="app">
    <Row><Title>Contact Book</Title></Row>
    <Row><Button label="Add Contact" onClick={onAddClick} /></Row>
  </Column>
)

export default App;
