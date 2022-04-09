"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const shared_1 = require("../../shared");
const utils_1 = require("../../utils");
const context_utils_1 = require("../../utils/context-utils");
const styles = require("./tab.css");
function Tab(props) {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const onTabChange = (() => {
        navigate(props.page);
        (0, utils_1.setColors)(shared_1.CONTENT.CONSUMER);
    });
    return (React.createElement(context_utils_1.default.Consumer, null, (context) => (React.createElement("div", { className: styles.tab, onClick: onTabChange },
        React.createElement("div", { className: styles.label }, props.label)))));
}
exports.Tab = Tab;
