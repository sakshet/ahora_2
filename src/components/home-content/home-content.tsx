import * as React from 'react';
import * as styles from './home-content.css';

export const HomeContent = (props: {}) => {
  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <div className={styles.mission}>
          {/* Our mission is to enable seamless and hassle-free consumption of everyday services, while increasing much-needed visibility for local businesses.<br /><br />Ahora, we have all you need. */}
          Coming Soon...
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.location}>
          Coming Soon...
        </div>
      </div>
    </div>
  );
};