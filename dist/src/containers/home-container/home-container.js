"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeContainer = void 0;
const React = require("react");
const components_1 = require("../../components");
const styles = require("./home-container.css");
class HomeContainer extends React.Component {
    render() {
        return (React.createElement("div", { className: styles.home },
            React.createElement(components_1.Header, null),
            React.createElement(components_1.HomeContent, null),
            React.createElement(components_1.Footer, null)));
    }
}
exports.HomeContainer = HomeContainer;
