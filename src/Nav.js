import React from 'react';
import {
  Link
} from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
      <nav>
        <ul class='Nav-links'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;