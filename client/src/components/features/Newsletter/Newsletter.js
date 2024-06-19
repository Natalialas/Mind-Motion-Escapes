import React, { useState } from 'react';
import styles from './Newsletter.module.scss';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.newsletter}>
      <h2>Subscribe to our Newsletter</h2>
      <p>Get the latest updates and offers in your inbox.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Subscribe</button>
      </form>
      {submitted && <p className={styles.successMessage}>Thank you for subscribing!</p>}
    </div>
  );
};

export default Newsletter;
