import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { COLOR, CONTENT } from '../../shared';
import { setColors } from '../../utils';
import RefDataContext from '../../utils/context-utils';
import * as styles from './tab.css';

export interface TabProps {
  label: string;
  page: string;
}

export function Tab (props: {label: string, page: string}) {
  const navigate = useNavigate();
  const onTabChange = (() => {
    navigate(props.page);
    setColors(CONTENT.CONSUMER);
  });
  return (
    <RefDataContext.Consumer>
      {(context) => (
        <div className={styles.tab} onClick={onTabChange}>
          <div className={styles.label}>{props.label}</div>
        </div>
      )}
    </RefDataContext.Consumer>
  );
}