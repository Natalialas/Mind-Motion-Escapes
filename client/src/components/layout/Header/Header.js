import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header} style={{ backgroundImage: `url(/images/header.jpg)` }}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>
          <span className={styles.line1}>LEARN TO</span>
          <span className={styles.line2}>SURF WITH US!</span>
        </h1>
        <h2>Hawaii, Waikiki Beach</h2>
        <p>Starting from 1,689 $</p>
      </div>
    </header>
  );
};

export default Header;
