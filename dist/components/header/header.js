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
exports.Header = void 0;
const classnames_1 = __importDefault(require("classnames"));
const React = __importStar(require("react"));
const styles = __importStar(require("./header.css"));
const constants_1 = require("../../shared/constants");
const Header = (props) => {
    return (React.createElement("div", { className: styles.header },
        React.createElement("div", { className: styles.label }, constants_1.APP_NAME.toUpperCase()),
        React.createElement("div", { className: styles.right },
            React.createElement("div", { className: (0, classnames_1.default)(styles.tab, styles.professional) }, "Register as a professional"),
            React.createElement("div", { className: styles.tab }, "Need a service?"))));
};
exports.Header = Header;
//# sourceMappingURL=header.js.map