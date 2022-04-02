import * as React from 'react';
import { Content, PageHeader } from '../../components';
import * as styles from './ahora-container.css';

export class AhoraContainer extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <PageHeader />
        <Content data={"Welcome"} />
      </div>
    );
  }
}