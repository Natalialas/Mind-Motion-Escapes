import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <section className={styles.blog}>
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
        <h5 className={styles.blockTitle}>SHOP</h5>
        <button>All products</button>
        <button>New Collection</button>
        <button>Top Selling Products</button>
        <button>Best Choice</button>
      </div>
      <div className={styles.block}>
        <h5 className={styles.blockTitle}>COMPANY</h5>
        <button>About us</button>
        <button>Blog</button>
        <button>Services</button>
        <button>Contact Us</button>
      </div>
      <div className={styles.details}>
        <h4 className={styles.detailsTitle}>GOT A QUESTION? CALL US 24/7</h4>
        <h4 className={styles.number}>777-880-345</h4>
        <p>Monday-Friday: 9:00-20:00</p>
        <p>Saturday: 9:00-18:00</p>
      </div>
    </div>
    <div className="text-center">
      <p>Copyright © 2024</p>
    </div>
  </section>
);

export default Footer;
