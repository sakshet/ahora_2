"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setColors = void 0;
const shared_1 = require("../shared");
function setColors(content) {
    document.documentElement.style.setProperty('--labelColor', shared_1.COLOR[content].labelColor);
    document.documentElement.style.setProperty('--consumerBg', shared_1.COLOR[content].consumerBg);
    document.documentElement.style.setProperty('--producerBg', shared_1.COLOR[content].producerBg);
    document.documentElement.style.setProperty('--tabColor', shared_1.COLOR[content].tabColor);
}
exports.setColors = setColors;
