import React from 'react';
import { Container } from 'react-bootstrap';
import './NavBar.css';


const NavBar = (props) => {
  return (
    <Container className='border-box'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='nav-text' href='#home'>
          <h1>
            Social <small className='text-muted'>FEED</small>
          </h1>
        </a>
      </nav>
    </Container>
  );
}

export default NavBar;