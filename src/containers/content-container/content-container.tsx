import * as React from 'react';
import RefDataContext from '../../utils/context-utils';
import { IContext } from '../ahora-container';
import * as styles from './content-container.css';

export class ContentContainer extends React.Component {
  
  render() {
    return (
      <RefDataContext.Consumer>
          {(context: IContext) => (
            context.referenceData.isLoggedIn ? (
              <div className={styles.content}>
                Welcome, {context.referenceData.memberInfo.firstName}<br/>
                We're glad you trusted us on {context.referenceData.memberInfo.memberSince}
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
}``