"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeContent = void 0;
const React = require("react");
const styles = require("./home-content.css");
const HomeContent = (props) => {
    return (React.createElement("div", { className: styles.home },
        React.createElement("div", { className: styles.left },
            React.createElement("div", { className: styles.mission }, "Coming Soon...")),
        React.createElement("div", { className: styles.right },
            React.createElement("div", { className: styles.location }, "Coming Soon..."))));
};
exports.HomeContent = HomeContent;
