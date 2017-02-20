import React from 'react';
import { Link } from 'react-router';
import './menu.scss';

const Menu = () => (
<ul className={'nav'}>
  <li><Link to={`/`}> Home </Link></li>
  <li><Link to={`/favorites`}> Favorites </Link></li>
</ul>
);

export default Menu;
