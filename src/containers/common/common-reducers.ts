import { Reducer } from 'redux';
import { ActionType, ErrorResponse, ICommonAction } from './common-actions';

export const defaultState: ICommonState = {
  error: undefined,
  isFetching: false,
  referenceData: {
    firstName: '',
    lastName: '',
    memberSince: '',
    userId: 0
  },
  referenceDataFetched: false,
  referenceDataSuccess: false
};

export interface IReferenceData {
  firstName: string;
  lastName: string;
  memberSince: string;
  userId: number;
};

export interface ICommonState {
  error: ErrorResponse | undefined;
  isFetching: boolean;
  referenceData: IReferenceData | undefined;
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
        referenceDataFetched: true,
        referenceDataSuccess: false
      };
  }
  return state;
}