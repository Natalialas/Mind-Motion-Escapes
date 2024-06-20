import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './TopBar.module.scss';

const TopBar = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate(`/cartitems`);
  };

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
          <div className={styles.link} onClick={handleCartClick} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopBar;
