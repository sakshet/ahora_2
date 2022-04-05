import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { IContext } from '../../containers/ahora-container';
import { ABOUT_LABEL, APP_NAME, BASE_URL, CONTENT, PAGES } from '../../shared';
import RefDataContext from '../../utils/context-utils';
import { setColors } from '../../utils';
import { Tab } from '../tab';
import * as styles from './page-header.css';

export function getLabel (context: IContext): string {
  const { isLoggedIn, memberInfo } = context.referenceData;
  return isLoggedIn ? `Welcome, ${memberInfo.firstName}` : 'Log In / Sign Up';
}

export function PageHeader (props: {}) {
  const navigate = useNavigate();
  const onClick = (() => {
    navigate(BASE_URL);
    setColors(CONTENT.MAIN);
  });

  return (
    <div className={styles.header}>
      <RefDataContext.Consumer>
        {(context: IContext) => (
          <div className={styles.header}>
            <div className={styles.label} onClick={onClick}>》{APP_NAME.toUpperCase()}《</div>
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