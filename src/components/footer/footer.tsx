import * as React from 'react';
import * as styles from './footer.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.tab}>About Us</div>
      <div className={styles.tab}>Terms & Conditions</div>
      <div className={styles.tab}>Privacy Policy</div>
      <div className={styles.tab}>Contact Us</div>
    </div>
  );
}