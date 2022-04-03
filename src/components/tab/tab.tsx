import * as React from 'react';
import RefDataContext from '../../utils/context-utils';
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
      <RefDataContext.Consumer>
        {(context) => (
          <div className={styles.tab} onClick={this.onClick}>
            {label}, {context.referenceData.firstName}
          </div>
        )}
      </RefDataContext.Consumer>
    );
  }
}