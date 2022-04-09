"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
const containers_1 = require("./containers");
const React = require("react");
const ReactDOM = require("react-dom/client");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(containers_1.HomeContainer, null)));
