import * as React from 'react';
import { ConsumerRenderer, ProviderRenderer } from '../../components';
import RefDataContext from '../../utils/context-utils';
import { IContext } from '../ahora-container';
import * as styles from './content-container.css';
export class ContentContainer extends React.Component {
  
  render() {
    return (
      <RefDataContext.Consumer>
          {(context: IContext) => (
            <div className={styles.content}>
              <ProviderRenderer />
              <ConsumerRenderer />
            </div>
          )}
        </RefDataContext.Consumer>
    );
  }
}