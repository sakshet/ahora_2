"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReferenceDataSelector = exports.createCommonSelector = void 0;
const get_1 = __importDefault(require("lodash-es/get"));
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
//# sourceMappingURL=selector-utils.js.map