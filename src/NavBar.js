import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <img src="/images/pirtate-flag.jpg" alt="Logo"/>

      <ul>
        <li className="navLink">
          <a href="/pirates">Pirates</a>
        </li>
        <li className="navLink">
          <a href="/pirates/new">Create Pirate</a>
        </li>
        <li className="navLink">
          <a href="/ships">Ships</a>
        </li>
        <li className="navLink">
          <a href="/ships/new">Create Ship</a>
        </li>
        <li className="navLink">
          <a href="/raids" >Raids</a>
        </li>
        <li className="navLink">
          <a href="/raids/new" >Create Raid</a>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;
