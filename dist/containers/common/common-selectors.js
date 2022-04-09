"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonSelector = exports.referenceDataSelector = void 0;
const reselect_1 = require("reselect");
const utils_1 = require("../../utils");
exports.referenceDataSelector = (0, reselect_1.createStructuredSelector)({
    isLoggedIn: (0, utils_1.createReferenceDataSelector)('isLoggedIn'),
    locations: (0, utils_1.createReferenceDataSelector)('locations'),
    memberInfo: (0, utils_1.createReferenceDataSelector)('memberInfo')
});
exports.commonSelector = (0, reselect_1.createStructuredSelector)({
    referenceData: exports.referenceDataSelector,
    referenceDataFetched: (0, utils_1.createCommonSelector)('referenceDataFetched')
});
//# sourceMappingURL=common-selectors.js.map