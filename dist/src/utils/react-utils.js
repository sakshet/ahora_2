"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withRouter = void 0;
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = (0, react_router_dom_1.useLocation)();
        let navigate = (0, react_router_dom_1.useNavigate)();
        let params = (0, react_router_dom_1.useParams)();
        return (React.createElement(Component, { ...props, router: { location, navigate, params } }));
    }
    return ComponentWithRouterProp;
}
exports.withRouter = withRouter;
