export var ActionType;
(function (ActionType) {
    ActionType["REQ_GET_REFERENCE_DATA"] = "REQ_GET_REFERENCE_DATA";
    ActionType["RECV_GET_REFERENCE_DATA"] = "RECV_GET_REFERENCE_DATA";
    ActionType["XHR_GET_REFERENCE_DATA"] = "XHR_GET_REFERENCE_DATA";
})(ActionType || (ActionType = {}));
export const getReferenceData = () => ({
    type: ActionType.REQ_GET_REFERENCE_DATA
});
export const getReferenceDataSuccess = (referenceData) => ({
    referenceData,
    type: ActionType.RECV_GET_REFERENCE_DATA
});
export const getReferenceDataFailure = (error) => ({
    error,
    type: ActionType.XHR_GET_REFERENCE_DATA
});
//# sourceMappingURL=common-actions.js.map