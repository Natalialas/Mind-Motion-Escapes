import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './Topbar.module.scss'; // Import stylów modułowych

const Topbar = () => {
  return (
    <Navbar expand="lg" className={styles.topbar}>
      <Container>
        <Navbar.Brand href="#home" className={styles.logo}>
          Mind&Motion Escapes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.navItems} ml-auto`}>
            <Nav.Link href="#home" className={styles.link}>Home</Nav.Link>
            <Nav.Link href="#adventures" className={styles.link}>Adventures</Nav.Link>
            <Nav.Link href="#about" className={styles.link}>About us</Nav.Link>
            <Nav.Link href="#login" className={styles.link}>Login</Nav.Link>
            <Nav.Link href="#cart" className={styles.link}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
