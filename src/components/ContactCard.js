import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from '../components/index';

const ContactCard = ({ id, name, phone, email, favorite, onToggleFavorite}) => (
  <li className={"card"}>
      <div className="{container}">
        <h4 className={"name"}><b>{name}</b></h4>
        <ul className={"personal-info"}>
          <li>
            <span className={"title"}>Phone:</span>
            <span>{phone}</span>
          </li>
          <li>
            <span className={"title"}>Email:</span>
            <span>{email}</span>
          </li>
          <li>
            <Button label="Favorite" className={favorite ? 'favorite' : 'default' } onClick={() => onToggleFavorite(id)} />
          </li>
        </ul>
        <Link className={"btn default"} to={`/contact/${id}`}> Edit Contact</Link>
      </div>
  </li>
);

ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
};

export default ContactCard;
