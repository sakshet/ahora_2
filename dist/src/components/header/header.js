"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const classnames_1 = require("classnames");
const React = require("react");
const styles = require("./header.css");
const constants_1 = require("../../shared/constants");
const Header = (props) => {
    return (React.createElement("div", { className: styles.header },
        React.createElement("div", { className: styles.label }, constants_1.APP_NAME.toUpperCase()),
        React.createElement("div", { className: styles.right },
            React.createElement("div", { className: (0, classnames_1.default)(styles.tab, styles.professional) }, "Register as a professional"),
            React.createElement("div", { className: styles.tab }, "Need a service?"))));
};
exports.Header = Header;
