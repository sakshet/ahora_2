import * as React from 'react';
import { BASE_URL, PAGES } from '../../utils';
import { Tab } from '../tab';
import * as styles from './page-header.css';

export class PageHeader extends React.Component {

  private onBrandClick = (): void => {
    window.location.assign(BASE_URL);
  }

  render() {
    // TODO - Support pageHeader as a supported CSS label
    return (
      <div className={styles.header}>
        <a className={styles.label} onClick={this.onBrandClick}>AHORA</a>
        <div className={styles.tabs}>
          <Tab id={"About us"} page={PAGES.ABOUT_US} />
          <Tab id={"Log In / Sign Up"} page={PAGES.LOGIN} />
        </div>
      </div>
    );
  }
}