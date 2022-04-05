import * as React from 'react';
import * as styles from './footer.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>About Us</div>
      <div>Terms & Conditions</div>
      <div>Privacy Policy</div>
      <div>Reviews</div>
      <div>Careers</div>
      <div>Contact Us</div>
    </div>
  );
}