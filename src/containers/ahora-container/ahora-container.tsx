import * as React from 'react';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { AboutUsRenderer, PageHeader } from '../../components';
import { ContentContainer, LoginContainer } from '../../containers';
import { defaultState } from '../../containers/common';
import { BASE_ROUTE, PAGES } from '../../shared';
import RefDataContext from '../../utils/context-utils';
import { commonReducer as common, getReferenceData, IReferenceData } from '../common';
import { commonSagas } from '../common/common-sagas';
import * as styles from './ahora-container.css';


function* rootSaga() {
  yield all([ commonSagas() ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ common }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export interface IAhoraContainerProps {

}

export interface IAhoraContainerState {
  referenceData: IReferenceData;
  referenceDataFetched: boolean;
  referenceDataSuccess: boolean;
}

export interface IContext {
  referenceData: IReferenceData;
}

export class AhoraContainer extends React.Component<IAhoraContainerProps, IAhoraContainerState> {
  
  state: IAhoraContainerState = {
    referenceData: defaultState.referenceData,
    referenceDataFetched: false,
    referenceDataSuccess: false
  };

  constructor(props: any) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  componentDidMount() {
    store.dispatch(getReferenceData());
    store.subscribe(this.handleStateChange);
  }

  private handleStateChange(): void {
    const { common } = store.getState();
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
          <div className={styles.content}>
            <Routes>
              <Route path={BASE_ROUTE} element={<ContentContainer />} />
              <Route path={PAGES.ABOUT_US} element={<AboutUsRenderer />} />
              <Route path={PAGES.LOGIN} element={<LoginContainer />} />
              <Route path='*' element={<Navigate to={BASE_ROUTE} replace />} />
            </Routes>
          </div>
        </RefDataContext.Provider>}
      </div>
    );
  }

  render() {
    const { referenceDataFetched, referenceDataSuccess } = this.state;
    return (
      <Provider store={store}>
        {referenceDataFetched && referenceDataSuccess ? (
          <div>{this.fetchRoutes()}</div>
        ) : <div>Loading</div>}
      </Provider>
    );
  }
}