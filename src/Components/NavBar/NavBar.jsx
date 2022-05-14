import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <NavBar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#'>
          Social <small className='text-muted'>Feed</small>
        </Navbar.Brand>
      </Container>
    </NavBar>
  );
}

export default NavBar;