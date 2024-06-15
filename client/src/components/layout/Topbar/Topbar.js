import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './TopBar.module.scss';

const TopBar = () => {
  return (
    <Navbar expand="lg" className={styles.topbar}>
      <Container className={styles.container}>
        <div className={styles.left} style={{ color: 'rgb(249,115,0)', fontSize: '1.2rem' }}>
          <Link to="/adventures" className={styles.link}>
            Adventures
          </Link>
          <Link to="/about" className={styles.link}>
            About us
          </Link>
        </div>
        <Navbar.Brand href="#home" className={styles.logo} style={{ color: 'rgb(249,115,0)', fontSize: '1.5rem' }}>
          Mind&Motion Escapes
        </Navbar.Brand>
        <div className={styles.right} style={{ color: 'rgb(249,115,0)', fontSize: '1.2rem' }}>
          <Link to="/login" className={styles.link}>
            Login
          </Link>
          <Link to="/cart" className={styles.link}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopBar;
