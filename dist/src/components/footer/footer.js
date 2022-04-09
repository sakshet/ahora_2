"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const React = require("react");
const styles = require("./footer.css");
const Footer = () => {
    return (React.createElement("div", { className: styles.footer },
        React.createElement("div", { className: styles.tab }, "About Us"),
        React.createElement("div", { className: styles.tab }, "Terms & Conditions"),
        React.createElement("div", { className: styles.tab }, "Privacy Policy"),
        React.createElement("div", { className: styles.tab }, "Contact Us")));
};
exports.Footer = Footer;
