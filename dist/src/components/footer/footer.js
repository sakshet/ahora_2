"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const React = require("react");
const styles = require("./footer.css");
const Footer = () => {
    return (React.createElement("div", { className: styles.footer },
        React.createElement("div", null, "About Us"),
        React.createElement("div", null, "Terms & Conditions"),
        React.createElement("div", null, "Privacy Policy"),
        React.createElement("div", null, "Contact Us")));
};
exports.Footer = Footer;
