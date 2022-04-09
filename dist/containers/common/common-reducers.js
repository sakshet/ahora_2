import { ActionType } from './common-actions';
export const defaultState = {
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
export const commonReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionType.REQ_GET_REFERENCE_DATA:
            return {
                ...state,
                isFetching: true
            };
        case ActionType.RECV_GET_REFERENCE_DATA:
            return {
                ...state,
                isFetching: false,
                referenceData: action.referenceData,
                referenceDataFetched: true,
                referenceDataSuccess: true
            };
        case ActionType.XHR_GET_REFERENCE_DATA:
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
//# sourceMappingURL=common-reducers.js.map