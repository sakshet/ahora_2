"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHeader = exports.getLabel = void 0;
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const shared_1 = require("../../shared");
const context_utils_1 = __importDefault(require("../../utils/context-utils"));
const utils_1 = require("../../utils");
const tab_1 = require("../tab");
const styles = __importStar(require("./page-header.css"));
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
//# sourceMappingURL=page-header.js.map