import * as React from 'react';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { AboutUsRenderer, PageHeader, Footer } from '../../components';
import { ContentContainer, LoginContainer } from '../../containers';
import { defaultState } from '../../containers/common';
import { BASE_ROUTE, PAGES } from '../../shared';
import RefDataContext from '../../utils/context-utils';
import { commonReducer as common, getReferenceData } from '../common';
import { commonSagas } from '../common/common-sagas';
import * as styles from './ahora-container.css';
function* rootSaga() {
    yield all([commonSagas()]);
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers({ common }), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export class AhoraContainer extends React.Component {
    state = {
        referenceData: defaultState.referenceData,
        referenceDataFetched: false,
        referenceDataSuccess: false
    };
    constructor(props) {
        super(props);
        this.handleStateChange = this.handleStateChange.bind(this);
    }
    componentDidMount() {
        store.dispatch(getReferenceData());
        store.subscribe(this.handleStateChange);
    }
    handleStateChange() {
        const { common } = store.getState();
        const { referenceData, referenceDataFetched, referenceDataSuccess } = common;
        this.setState({
            referenceData,
            referenceDataFetched,
            referenceDataSuccess
        });
    }
    fetchRoutes() {
        const { referenceData } = this.state;
        return (React.createElement("div", { className: styles.container }, referenceData && React.createElement(RefDataContext.Provider, { value: { referenceData } },
            React.createElement(PageHeader, null),
            React.createElement("div", { className: styles.content },
                React.createElement(Routes, null,
                    React.createElement(Route, { path: BASE_ROUTE, element: React.createElement(ContentContainer, null) }),
                    React.createElement(Route, { path: PAGES.ABOUT_US, element: React.createElement(AboutUsRenderer, null) }),
                    React.createElement(Route, { path: PAGES.LOGIN, element: React.createElement(LoginContainer, null) }),
                    React.createElement(Route, { path: '*', element: React.createElement(Navigate, { to: BASE_ROUTE, replace: true }) }))),
            React.createElement(Footer, null))));
    }
    render() {
        const { referenceDataFetched, referenceDataSuccess } = this.state;
        return (React.createElement(Provider, { store: store }, referenceDataFetched && referenceDataSuccess ? (React.createElement("div", null, this.fetchRoutes())) : React.createElement("div", null, "Loading")));
    }
}
//# sourceMappingURL=ahora-container.js.map