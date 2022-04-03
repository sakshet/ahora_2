import * as React from 'react';
import * as styles from './tab.css';

export interface TabProps {
  label: string;
  page: string;
}

export class Tab extends React.Component<TabProps> {

  private onClick = (): void => {
    const { page } = this.props;
    window.location.assign(page);
  }

  render() {
    const { label } = this.props;
    return (
      <a className={styles.tab} onClick={this.onClick}>
        {label}
      </a>
    );
  }
}