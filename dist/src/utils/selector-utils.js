"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReferenceDataSelector = exports.createCommonSelector = void 0;
const get_1 = require("lodash-es/get");
function createCommonSelector(property) {
    return (state) => {
        return state.common[property];
    };
}
exports.createCommonSelector = createCommonSelector;
function createReferenceDataSelector(property) {
    return (state) => {
        const { referenceData } = state.common;
        return (0, get_1.default)(referenceData, property);
    };
}
exports.createReferenceDataSelector = createReferenceDataSelector;
