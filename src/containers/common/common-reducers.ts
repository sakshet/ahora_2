import { Reducer } from 'redux';
import { ActionType, ErrorResponse, ICommonAction } from './common-actions';

export const defaultState: ICommonState = {
  error: undefined,
  isFetching: false,
  referenceData: {
    firstName: '',
    isLoggedIn: false,
    lastName: '',
    memberSince: '',
    userId: 0
  },
  referenceDataFetched: false,
  referenceDataSuccess: false
};

export interface IReferenceData {
  firstName: string;
  isLoggedIn: boolean;
  lastName: string;
  memberSince: string;
  userId: number;
};

export interface IMemberInfo {
  firstName: string;
  lastName: string;
  memberSince: string;
  userId: number;
}

export interface IReferenceDataFetch {
  isLoggedIn: boolean;
  memberInfo: IMemberInfo;
}

export interface ICommonState {
  error: ErrorResponse | undefined;
  isFetching: boolean;
  referenceData: IReferenceData;
  referenceDataFetched: boolean;
  referenceDataSuccess: boolean;
};

export const commonReducer: Reducer<ICommonState, ICommonAction> = (
  state: ICommonState = defaultState, action: ICommonAction
): ICommonState => {
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
        referenceData: {
          isLoggedIn: action.referenceData.isLoggedIn,
          ...action.referenceData.memberInfo
        },
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
}