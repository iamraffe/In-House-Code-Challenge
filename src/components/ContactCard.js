import React, { PropTypes } from 'react'

const ContactCard = ({ id, name, phone, email, favorite, onToggleFavorite}) => (
  <li>
    <div className="card">
      <div className="container">
        <h4><b>{name}</b></h4>
        <ul className="personalInfo">
          <li>
            <span className="title">Phone:</span>
            <span>{phone}</span>
          </li>
          <li>
            <span className="title">Email:</span>
            <span>{email}</span>
          </li>
          <li>
            <span className="title">Favorite:</span>
            <span>{favorite}</span>
          </li>
        </ul>
        <button style={{color: favorite ? 'red' : ''}} onClick={() => onToggleFavorite(id)}>
          favorite
        </button>
      </div>
    </div>

    <button>Edit</button>

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
