import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../../shared';
import RefDataContext from '../../utils/context-utils';
import * as styles from './tab.css';

export interface TabProps {
  label: string;
  page: string;
}

const orientation = 'to right';
const color1 = '#587264';
const color2 = '#89bca5';

export function Tab (props: {label: string, page: string}) {
  const navigate = useNavigate();
  // const onTabChange = (() => navigate(props.page));
  const onTabChange = (() => {
    navigate(props.page);
    if(props.page === PAGES.ABOUT_US) {
      document.body.style.backgroundColor = `linear-gradient(to right, ${color1} 0%, ${color2} 100%))`;
    }
  });
  
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