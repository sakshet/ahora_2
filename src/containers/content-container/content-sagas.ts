import { call, put, select, takeLatest } from 'redux-saga/effects';
import { commonSelector, IReferenceData } from '../common';
import { ActionType, IContentAction } from './content-actions';

export function* getReferenceDataSaga(action: IContentAction) {
  try {
    const refData: IReferenceData = yield select(commonSelector);
    yield put({
      message: refData.firstName + " " + refData.lastName + " " + refData.memberSince + " " + refData.userId,
      type: ActionType.RECV_GET_MESSAGE
    });
  } catch(exception) {
    
  }
}

export function* contentSagas(): any {
  yield takeLatest(ActionType.REQ_GET_MESSAGE, getReferenceDataSaga);
}