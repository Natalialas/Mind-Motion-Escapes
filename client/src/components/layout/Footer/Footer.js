import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';

const Footer = () => (
  <section className={styles.blog}>
    <Container className={styles.container}>
    <img src="/images/logo_transparent.png" alt="Logo" className={styles.logo} />
    <div className={styles.content}>
      <div className={styles.block}>
        <h5 className={styles.blockTitle}>LINKS</h5>
        <button>Legal & Privacy</button>
        <button>Contact</button>
        <button>Gift card</button>
        <button>Customer service</button>
      </div>
      <div className={styles.block}>
        <h5 className={styles.blockTitle}>ACCOUNT</h5>
        <button>My profile</button>
        <button>My order history</button>
        <button>My wishlist</button>
        <button>My shopping bag</button>
      </div>
      <div className={styles.block}>
        <h5 className={styles.blockTitle}>SOCIALS</h5>
        <button>Instagram</button>
        <button>LinkedIn</button>
      </div>
      <div className={styles.block}>
        <h5 className={styles.blockTitle}>COMPANY</h5>
        <button>About us</button>
        <button>Blog</button>
        <button>Contact Us</button>
      </div>
    </div>
    <div className="text-center">
      <p>Copyright © 2024</p>
    </div>
    </Container>
  </section>
);

export default Footer;
