import * as React from 'react';
import RefDataContext from '../../utils/context-utils';
import * as styles from './content-container.css';

export class ContentContainer extends React.Component {
  
  render() {
    return (
      <RefDataContext.Consumer>
          {(context) => (
            <div className={styles.content}>
              Welcome, {context.referenceData.firstName}<br/>
              We're glad you trusted us on {context.referenceData.memberSince}
            </div>
          )}
        </RefDataContext.Consumer>
    );
  }
}