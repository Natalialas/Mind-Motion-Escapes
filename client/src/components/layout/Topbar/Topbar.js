import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import styles from './TopBar.module.scss';

const TopBar = () => {
  return (
    <Navbar expand="lg" className={styles.topbar}>
      <Container className={styles.container}>
        <div className={styles.left} style={{ color: 'rgb(249,115,0)', fontSize: '1.2rem' }}>
          <NavLink to="/adventures" className={styles.link} activeClassName={styles.active}>
            Adventures
          </NavLink>
          <NavLink to="/about" className={styles.link} activeClassName={styles.active}>
            About us
          </NavLink>
        </div>
        <Navbar.Brand as={NavLink} to="/" className={`${styles.logo} ${styles.link}`} style={{ color: 'rgb(249,115,0)', fontSize: '1.5rem' }}>
          Mind&Motion Escapes
        </Navbar.Brand>
        <div className={styles.right} style={{ color: 'rgb(249,115,0)', fontSize: '1.2rem' }}>
          <NavLink to="/login" className={styles.link} activeClassName={styles.active}>
            Login
          </NavLink>
          <NavLink to="/cart" className={styles.link} activeClassName={styles.active}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopBar;
