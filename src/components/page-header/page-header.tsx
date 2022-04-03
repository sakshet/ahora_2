import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ABOUT_LABEL, APP_NAME, BASE_URL, PAGES } from '../../shared';
import RefDataContext from '../../utils/context-utils';
import { Tab } from '../tab';
import * as styles from './page-header.css';

export function getLabel (context): string {
  const { isLoggedIn, memberInfo } = context;
  return isLoggedIn ? `Welcome ${memberInfo.firstName}` : 'Log In / Sign Up';
}

export function PageHeader (props: {}) {
  const navigate = useNavigate();
  const onClick = (() => navigate(BASE_URL));

  return (
    <div className={styles.header}>
      <RefDataContext.Consumer>
        {(context) => (
          <div className={styles.header}>
            <a className={styles.label} onClick={onClick}>{APP_NAME}</a>
            <div className={styles.tabs}>
              <Tab label={ABOUT_LABEL} page={PAGES.ABOUT_US} />
              <Tab label={getLabel(context)} page={PAGES.LOGIN} />
            </div>
          </div>
        )}
      </RefDataContext.Consumer>
    </div>
  );
}