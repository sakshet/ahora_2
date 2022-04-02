import { IReferenceData } from "./common-reducers";

export enum ActionType {
  REQ_GET_REFERENCE_DATA = `REQ_GET_REFERENCE_DATA`,
  RECV_GET_REFERENCE_DATA = `RECV_GET_REFERENCE_DATA`,
  XHR_GET_REFERENCE_DATA = `XHR_GET_REFERENCE_DATA`
}

export interface ErrorResponse {
  status: number;
  messages?: string;
}

export interface GetReferenceDataAction {
  type: ActionType.REQ_GET_REFERENCE_DATA;
}

export interface GetReferenceDataSuccessAction {
  referenceData: IReferenceData;
  type: ActionType.RECV_GET_REFERENCE_DATA;
}

export interface GetReferenceDataFailureAction {
  error: ErrorResponse;
  type: ActionType.XHR_GET_REFERENCE_DATA
}

export const getReferenceData = (): GetReferenceDataAction => ({
  type: ActionType.REQ_GET_REFERENCE_DATA
});

export const getReferenceDataSuccess = (referenceData: IReferenceData): GetReferenceDataSuccessAction => ({
  referenceData,
  type: ActionType.RECV_GET_REFERENCE_DATA
}); 

export const getReferenceDataFailure = (error: ErrorResponse): GetReferenceDataFailureAction => ({
  error,
  type: ActionType.XHR_GET_REFERENCE_DATA
});

export type ICommonAction =
  | GetReferenceDataAction
  | GetReferenceDataSuccessAction
  | GetReferenceDataFailureAction;