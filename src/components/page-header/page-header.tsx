import * as React from 'react';
import { ABOUT_LABEL, BASE_URL, PAGES } from '../../shared';
import RefDataContext from '../../utils/context-utils';
import { Tab } from '../tab';
import * as styles from './page-header.css';

export class PageHeader extends React.Component {

  private onBrandClick = (): void => {
    window.location.assign(BASE_URL);
  }

  render() {
    return (
      <div className={styles.header}>
        <RefDataContext.Consumer>
          {(context) => (
            <div className={styles.header}>
              <a className={styles.label} onClick={this.onBrandClick}>AHORA</a>
              <div className={styles.tabs}>
                <Tab label={ABOUT_LABEL} page={PAGES.ABOUT_US} />
                <Tab
                  label={`Welcome, ${context.referenceData.firstName}`}
                  page={PAGES.LOGIN}
                />
              </div>
            </div>
          )}
        </RefDataContext.Consumer>
      </div>
    );
  }
}