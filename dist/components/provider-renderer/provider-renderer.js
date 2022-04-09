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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderRenderer = void 0;
const React = __importStar(require("react"));
const styles = __importStar(require("./provider-renderer.css"));
const ProviderRenderer = (props) => {
    return (React.createElement("div", { className: styles.provider },
        React.createElement("div", { className: styles.message },
            "Earn More.",
            React.createElement("br", null),
            "Earn Respect.",
            React.createElement("br", null),
            "Safety Ensured."),
        React.createElement("div", { className: styles.message }, "Join other partners across London, Liverpool and across the United Kingdom."),
        React.createElement("div", { className: styles.message }, "Start earning straight away. Share your details and we'll reach out with next steps.")));
};
exports.ProviderRenderer = ProviderRenderer;
//# sourceMappingURL=provider-renderer.js.map