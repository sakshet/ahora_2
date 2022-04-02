import * as React from 'react';
import * as styles from './content.css';

export const Content = (props: {data: string}) => {
  return (
    <div className={styles.content}>{props.data}</div>
  );
}