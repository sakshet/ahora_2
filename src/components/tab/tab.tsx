import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import RefDataContext from '../../utils/context-utils';
import * as styles from './tab.css';

export interface TabProps {
  label: string;
  page: string;
}

export function Tab (props: {label: string, page: string}) {
  const navigate = useNavigate();
  const onTabChange = (() => navigate(props.page));
  
  return (
    <div className={styles.tab}>
      <RefDataContext.Consumer>
        {(context) => (
          <div className={styles.tab} onClick={onTabChange}>
            {props.label}
          </div>
        )}
      </RefDataContext.Consumer>
    </div>
  );
}