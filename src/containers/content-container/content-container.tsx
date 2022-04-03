import * as React from 'react';
import RefDataContext from '../../utils/context-utils';
import * as styles from './content-container.css';

export class ContentContainer extends React.Component {
  
  render() {
    return (
      <RefDataContext.Consumer>
          {(context) => (
            context.referenceData.isLoggedIn ? (
              <div className={styles.content}>
                Welcome, {context.referenceData.firstName}<br/>
                We're glad you trusted us on {context.referenceData.memberSince}
              </div>
            ) : (
              <div className={styles.content}>
                Please log in to see more information
              </div>
            )
          )}
        </RefDataContext.Consumer>
    );
  }
}