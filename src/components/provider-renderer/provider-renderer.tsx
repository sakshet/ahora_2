import * as React from 'react';
import * as styles from './provider-renderer.css';

export const ProviderRenderer = (props: {}) => {
  return (
    <div className={styles.provider}>
      <div className={styles.message}>
        Earn More.<br />Earn Respect.<br/>Safety Ensured.
      </div>
      <div className={styles.message}>
        Join other partners across London, Liverpool and across the United Kingdom.
      </div>
      <div className={styles.message}>
        Start earning straight away. Share your details and we'll reach out with next steps.
      </div>
      
    </div>
  );
}