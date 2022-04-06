import * as React from 'react';
import { Header, HomeContent, Footer } from '../../components';
import * as styles from './home-container.css';

export class HomeContainer extends React.Component {
  render() {
    return (
      <div className={styles.home}>
        <Header />
        <HomeContent />
        <Footer />
      </div>
    );
  }
}