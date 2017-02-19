import React from 'react';
import { Column, Row, Title, Button } from './index';
import EditContactContainer from '../containers/EditContactContainer';

/*const onAddClick = (event) => {
   event.preventDefault();
};*/

const EditContactPage = ({ params }) => (
  <Column className="editContact">
    <Row><Title>Edit Contact</Title></Row>

    <Row>
      <EditContactContainer params={params} />
      {/*<Button label="Add Contact" onClick={onAddClick} />
      <ContactList />
        */}
    </Row>
  </Column>
);

export default EditContactPage;
