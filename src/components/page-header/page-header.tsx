import * as React from 'react';
import * as styles from './page-header.css';

export class PageHeader extends React.Component {
  render() {
    // TODO - Support pageHeader as a supported CSS label
    return (
      <div className={styles.header}>
        <div className={styles.label}>AHORA</div>
        <div className={styles.tabs}>
          <a className={styles.tab}>About us</a>
          <a className={styles.tab}>Tab 2</a>
          <a className={styles.tab}>Tab 3</a>
          <a className={styles.tab}>Log In / Sign Up</a>
        </div>
      </div>
    );
  }
}