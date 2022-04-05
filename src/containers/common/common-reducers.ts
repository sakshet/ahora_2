import { Reducer } from 'redux';
import { ActionType, ErrorResponse, ICommonAction } from './common-actions';

export const defaultState: ICommonState = {
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

export interface IReferenceData {
  isLoggedIn: boolean;
  locations: ILocation[];
  memberInfo: IMemberInfo;
};

export interface IMemberInfo {
  firstName: string;
  lastName: string;
  memberSince: string;
  userId: number;
  userName: string;
}

export interface ILocation {
  city: string;
  country: string;
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
}