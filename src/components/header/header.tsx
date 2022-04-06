import classnames from 'classnames';
import * as React from 'react';
import * as styles from './header.css';
import { APP_NAME } from '../../shared/constants';

export const Header = (props: {}) => {
  return (
    <div className={styles.header}>
      <div className={styles.label}>{APP_NAME.toUpperCase()}</div>
      <div className={styles.right}>
        <div className={classnames(styles.tab, styles.professional)}>
          Register as a professional
        </div>
        <div className={styles.tab}>
          Need a service?
        </div>
      </div>
    </div>
  );
}