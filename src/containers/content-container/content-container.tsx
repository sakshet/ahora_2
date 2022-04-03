import * as React from 'react';
import * as styles from './content-container.css';

export interface IContentContainerProps {

}

export interface IContentContainerState {

}

export class ContentContainer extends React.Component<IContentContainerProps, IContentContainerState> {
  
  componentDidMount() {
    
  }
  
  render() {
    return (
      <div className={styles.content}>Welcome</div>
    );
  }
}