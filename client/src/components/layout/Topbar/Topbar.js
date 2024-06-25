import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './TopBar.module.scss';

const TopBar = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cartitems');
  };

  return (
    <Navbar expand="lg" className={styles.topbar}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <Navbar.Brand as={NavLink} to="/" className={`${styles.logo} ${styles.link}`} style={{ color: 'rgb(249,115,0)', fontSize: '1.5rem' }}>
            Mind&Motion Escapes
          </Navbar.Brand>
        </div>
        <div className={styles.right}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`${styles.navbarNav} ml-auto`}>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/adventures" className={styles.link} activeClassName={styles.active} style={{ color: 'rgb(249,115,0)', fontSize: '1.2rem' }}>
                  Adventures
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/about" className={styles.link} activeClassName={styles.active} style={{ color: 'rgb(249,115,0)', fontSize: '1.2rem' }}>
                  About us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/login" className={styles.link} activeClassName={styles.active} style={{ color: 'rgb(249,115,0)', fontSize: '1.2rem' }}>
                  Login
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ color: 'rgb(249,115,0)', fontSize: '1.2rem' }}>
                <div className={`${styles.link} ${styles.icon}`} onClick={handleCartClick} style={{ cursor: 'pointer' }}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopBar;
