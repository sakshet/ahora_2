"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHeader = exports.getLabel = void 0;
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const shared_1 = require("../../shared");
const context_utils_1 = require("../../utils/context-utils");
const utils_1 = require("../../utils");
const tab_1 = require("../tab");
const styles = require("./page-header.css");
function getLabel(context) {
    const { isLoggedIn, memberInfo } = context.referenceData;
    return isLoggedIn ? `Welcome, ${memberInfo.firstName}` : 'Log In / Sign Up';
}
exports.getLabel = getLabel;
function PageHeader(props) {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const onClick = (() => {
        navigate(shared_1.BASE_URL);
        (0, utils_1.setColors)(shared_1.CONTENT.MAIN);
    });
    return (React.createElement("div", { className: styles.header },
        React.createElement(context_utils_1.default.Consumer, null, (context) => (React.createElement("div", { className: styles.header },
            React.createElement("div", { className: styles.label, onClick: onClick },
                "\u300B",
                shared_1.APP_NAME,
                "\u300A"),
            React.createElement("div", { className: styles.tabs },
                React.createElement(tab_1.Tab, { label: shared_1.ABOUT_LABEL, page: shared_1.PAGES.ABOUT_US }),
                React.createElement(tab_1.Tab, { label: getLabel(context), page: shared_1.PAGES.LOGIN })))))));
}
exports.PageHeader = PageHeader;
