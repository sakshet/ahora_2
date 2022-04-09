"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentContainer = void 0;
const React = require("react");
const components_1 = require("../../components");
const context_utils_1 = require("../../utils/context-utils");
const styles = require("./content-container.css");
class ContentContainer extends React.Component {
    render() {
        return (React.createElement(context_utils_1.default.Consumer, null, (context) => (React.createElement("div", { className: styles.content },
            React.createElement(components_1.ProviderRenderer, null),
            React.createElement(components_1.ConsumerRenderer, null)))));
    }
}
exports.ContentContainer = ContentContainer;
