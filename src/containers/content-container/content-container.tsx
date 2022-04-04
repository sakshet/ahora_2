import * as React from 'react';
import RefDataContext from '../../utils/context-utils';
import { IContext } from '../ahora-container';
import * as styles from './content-container.css';
import { APP_NAME } from '../../shared';
export class ContentContainer extends React.Component {
  
  render() {
    return (
      <RefDataContext.Consumer>
          {(context: IContext) => (
            <div className={styles.content}>
              <div className={styles.provider}>
                If you want to provide a service, we'll help you. If you want to provide a service, we'll help you. If you want to provide a service, we'll help you
              </div>
              <div className={styles.customer}>
                As a customer, we provide you many services. To get a better idea, please click abcd. As a customer, we provide you many services. To get a better idea, please click abcd. As a customer, we provide you many services. To get a better idea, please click abcd. As a customer, we provide you many services. To get a better idea, please click abcd. As a customer, we provide you many services. To get a better idea, please click abcd. As a customer, we provide you many services. To get a better idea, please click abcd. As a customer, we provide you many services. To get a better idea, please click abcd. As a customer, we provide you many services. To get a better idea, please click abcd. As a customer, we provide you many services. To get a better idea, please click abcd. As a customer, we provide you many services. To get a better idea, please click abcd. As a customer, we provide you many services. To get a better idea, please click abcd. 
              </div>
            </div>
            // <div className={styles.content}>
            //   <div className={styles.left}>location<br/>abc<br/><br/>abc</div>
            //   <div className={styles.right}>
            //     <div className={styles.message}>
            //       Everything you need
            //       <div className={styles.ahora}>{APP_NAME}</div>
            //     </div>
            //   </div>
            // </div>
          )}
        </RefDataContext.Consumer>
    );
  }
}