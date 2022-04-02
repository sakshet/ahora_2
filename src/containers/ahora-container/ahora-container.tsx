import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { AboutUsRenderer, PageHeader } from '../../components';
import { ContentContainer, LoginContainer } from '../../containers';
import { BASE_ROUTE, PAGES } from '../../shared';
import { commonReducer as common, IReferenceData } from '../common';
import { contentReducer as content, contentSagas } from '../content-container';
import { getReferenceData } from '../common/common-actions';
import { commonSagas } from '../common/common-sagas';
import * as styles from './ahora-container.css';
import RefDataContext from '../../utils/context-utils';

function* rootSaga() {
  yield all([
    commonSagas(),
    contentSagas()
  ]);
}
const sagaMiddleWare = createSagaMiddleware();

export interface IAhoraContainerProps {
  
}

export interface IAhoraContainerState {
  referenceData: IReferenceData | undefined;
  referenceDataFetched: boolean;
  referenceDataSuccess: boolean;
}

export class AhoraContainer extends React.Component<IAhoraContainerProps, IAhoraContainerState> {
  private store;
  private middleware = [logger, sagaMiddleWare];

  state: IAhoraContainerState = {
    referenceData: undefined,
    referenceDataFetched: false,
    referenceDataSuccess: false
  };

  constructor(props: any) {
    super(props);
    this.store = createStore(
      combineReducers({ common, content }),
      applyMiddleware(...this.middleware)
    );
    sagaMiddleWare.run(rootSaga);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  componentDidMount() {
    this.store.dispatch(getReferenceData());
    this.store.subscribe(this.handleStateChange);
  }

  private handleStateChange(): void {
    const { common } = this.store.getState();
    const { referenceData, referenceDataFetched, referenceDataSuccess } = common;
    this.setState({
      referenceData,
      referenceDataFetched,
      referenceDataSuccess
    });
  }

  private fetchRoutes() {
    const { referenceData } = this.state;
    return ( 
      <div className={styles.container}>
        {referenceData && <RefDataContext.Provider value={{ referenceData }}>
          <PageHeader />
          <BrowserRouter>
            <Routes>
              <Route path={BASE_ROUTE} element={<ContentContainer />} />
              <Route path={PAGES.ABOUT_US} element={<AboutUsRenderer />} />
              <Route path={PAGES.LOGIN} element={<LoginContainer />} />
              <Route path='*' element={<Navigate to={BASE_ROUTE} replace />} />
            </Routes>
          </BrowserRouter>
        </RefDataContext.Provider>}
      </div>
    );
  }

  render() {
    const { referenceDataFetched, referenceDataSuccess } = this.state;
    return (
      <Provider store={this.store}>
        {referenceDataFetched && referenceDataSuccess ? (
          <div>{this.fetchRoutes()}</div>
        ) : <div>Loading</div>}
      </Provider>
      
    );
  }
}


