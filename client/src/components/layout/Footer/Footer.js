import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';

const Footer = () => (
  <section className={styles.blog}>
    <Container className={styles.container}>
      <div className={styles.content}>
        <img src="/images/logo_transparent.png" alt="Logo" className={styles.logo} />
        <div className={styles.blocks}>
          <div className={styles.block}>
            <h5 className={styles.blockTitle}>INFO</h5>
            <ul>
              <li><button>About us</button></li>
              <li><button>Contact</button></li>
              <li><button>Gift card</button></li>
              <li><button>Customer service</button></li>
            </ul>
          </div>
          <div className={styles.block}>
            <h5 className={styles.blockTitle}>ACCOUNT</h5>
            <ul>
              <li><button>My profile</button></li>
              <li><button>Order history</button></li>
              <li><button>Wishlist</button></li>
              <li><button>Shopping bag</button></li>
            </ul>
          </div>
          <div className={styles.block}>
            <h5 className={styles.blockTitle}>SOCIALS</h5>
            <ul>
              <li><button>Instagram</button></li>
              <li><button>LinkedIn</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© Mind&Motion Escapes 2024</p>
      </div>
    </Container>
  </section>
);

export default Footer;
