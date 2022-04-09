"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferenceDataFailure = exports.getReferenceDataSuccess = exports.getReferenceData = exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType["REQ_GET_REFERENCE_DATA"] = "REQ_GET_REFERENCE_DATA";
    ActionType["RECV_GET_REFERENCE_DATA"] = "RECV_GET_REFERENCE_DATA";
    ActionType["XHR_GET_REFERENCE_DATA"] = "XHR_GET_REFERENCE_DATA";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
const getReferenceData = () => ({
    type: ActionType.REQ_GET_REFERENCE_DATA
});
exports.getReferenceData = getReferenceData;
const getReferenceDataSuccess = (referenceData) => ({
    referenceData,
    type: ActionType.RECV_GET_REFERENCE_DATA
});
exports.getReferenceDataSuccess = getReferenceDataSuccess;
const getReferenceDataFailure = (error) => ({
    error,
    type: ActionType.XHR_GET_REFERENCE_DATA
});
exports.getReferenceDataFailure = getReferenceDataFailure;
