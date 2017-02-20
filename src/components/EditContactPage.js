import React from 'react';
import { Column, Row, Title } from './index';
import EditContactContainer from '../containers/EditContactContainer';
import Menu from '../components/Menu/Menu';

const EditContactPage = ({ params }) => (
  <Column className="editContact">
    <Menu />
    <Row><Title>Edit Contact</Title></Row>

    <Row>
      <EditContactContainer params={params} />
    </Row>
  </Column>
);

export default EditContactPage;
