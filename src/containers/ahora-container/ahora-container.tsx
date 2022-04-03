import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutUsRenderer, Content, PageHeader } from '../../components';
import { LoginContainer } from '../../containers';
import { BASE_ROUTE, PAGES } from '../../utils';
import * as styles from './ahora-container.css';

export class AhoraContainer extends React.Component {
  
  render() {
    return (
      <div className={styles.container}>
        <PageHeader />
        <BrowserRouter>
          <Routes>
            <Route path={BASE_ROUTE} element={<Content />} />
            <Route path={PAGES.ABOUT_US} element={<AboutUsRenderer />} />
            <Route path={PAGES.LOGIN} element={<LoginContainer />} />
            <Route path='*' element={<Navigate to={BASE_ROUTE} replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}