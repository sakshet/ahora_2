"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AhoraContainer = void 0;
const React = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const redux_1 = require("redux");
const redux_saga_1 = require("redux-saga");
const effects_1 = require("redux-saga/effects");
const components_1 = require("../../components");
const containers_1 = require("../../containers");
const common_1 = require("../../containers/common");
const shared_1 = require("../../shared");
const context_utils_1 = require("../../utils/context-utils");
const common_2 = require("../common");
const common_sagas_1 = require("../common/common-sagas");
const styles = require("./ahora-container.css");
function* rootSaga() {
    yield (0, effects_1.all)([(0, common_sagas_1.commonSagas)()]);
}
const sagaMiddleware = (0, redux_saga_1.default)();
const store = (0, redux_1.createStore)((0, redux_1.combineReducers)({ common: common_2.commonReducer }), (0, redux_1.applyMiddleware)(sagaMiddleware));
sagaMiddleware.run(rootSaga);
class AhoraContainer extends React.Component {
    state = {
        referenceData: common_1.defaultState.referenceData,
        referenceDataFetched: false,
        referenceDataSuccess: false
    };
    constructor(props) {
        super(props);
        this.handleStateChange = this.handleStateChange.bind(this);
    }
    componentDidMount() {
        store.dispatch((0, common_2.getReferenceData)());
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
        return (React.createElement("div", { className: styles.container }, referenceData && React.createElement(context_utils_1.default.Provider, { value: { referenceData } },
            React.createElement(components_1.PageHeader, null),
            React.createElement("div", { className: styles.content },
                React.createElement(react_router_dom_1.Routes, null,
                    React.createElement(react_router_dom_1.Route, { path: shared_1.BASE_ROUTE, element: React.createElement(containers_1.ContentContainer, null) }),
                    React.createElement(react_router_dom_1.Route, { path: shared_1.PAGES.ABOUT_US, element: React.createElement(components_1.AboutUsRenderer, null) }),
                    React.createElement(react_router_dom_1.Route, { path: shared_1.PAGES.LOGIN, element: React.createElement(containers_1.LoginContainer, null) }),
                    React.createElement(react_router_dom_1.Route, { path: '*', element: React.createElement(react_router_dom_1.Navigate, { to: shared_1.BASE_ROUTE, replace: true }) }))),
            React.createElement(components_1.Footer, null))));
    }
    render() {
        const { referenceDataFetched, referenceDataSuccess } = this.state;
        return (React.createElement(react_redux_1.Provider, { store: store }, referenceDataFetched && referenceDataSuccess ? (React.createElement("div", null, this.fetchRoutes())) : React.createElement("div", null, "Loading")));
    }
}
exports.AhoraContainer = AhoraContainer;
