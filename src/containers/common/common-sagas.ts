import { call, put, takeEvery } from 'redux-saga/effects';
import { getReferenceData } from '../../services';
import { ActionType, ICommonAction } from "./common-actions";
import { IReferenceData } from "./common-reducers";

export function* getReferenceDataSaga(action: ICommonAction) {
  try {
    const referenceData: IReferenceData = yield call(getReferenceData);
    yield put({
      referenceData,
      type: ActionType.RECV_GET_REFERENCE_DATA
    });
  } catch(exception) {
    yield put({ type: ActionType.XHR_GET_REFERENCE_DATA, error: exception });
  }
}

export function* commonSagas(): any {
  yield takeEvery(ActionType.REQ_GET_REFERENCE_DATA, getReferenceDataSaga);
}