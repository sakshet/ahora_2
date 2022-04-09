"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonReducer = exports.defaultState = void 0;
const common_actions_1 = require("./common-actions");
exports.defaultState = {
    error: undefined,
    isFetching: false,
    referenceData: {
        isLoggedIn: false,
        locations: [],
        memberInfo: {
            firstName: '',
            lastName: '',
            memberSince: '',
            userId: 0,
            userName: ''
        }
    },
    referenceDataFetched: false,
    referenceDataSuccess: false
};
;
;
const commonReducer = (state = exports.defaultState, action) => {
    switch (action.type) {
        case common_actions_1.ActionType.REQ_GET_REFERENCE_DATA:
            return {
                ...state,
                isFetching: true
            };
        case common_actions_1.ActionType.RECV_GET_REFERENCE_DATA:
            return {
                ...state,
                isFetching: false,
                referenceData: action.referenceData,
                referenceDataFetched: true,
                referenceDataSuccess: true
            };
        case common_actions_1.ActionType.XHR_GET_REFERENCE_DATA:
            return {
                ...state,
                error: action.error,
                isFetching: false,
                referenceDataFetched: true,
                referenceDataSuccess: false
            };
    }
    return state;
};
exports.commonReducer = commonReducer;
