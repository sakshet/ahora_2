import { call, put, takeEvery } from 'redux-saga/effects';
import { getReferenceData } from '../../services';
import { ActionType } from "./common-actions";
export function* getReferenceDataSaga(action) {
    try {
        const referenceData = yield call(getReferenceData);
        yield put({
            referenceData,
            type: ActionType.RECV_GET_REFERENCE_DATA
        });
    }
    catch (exception) {
        yield put({ type: ActionType.XHR_GET_REFERENCE_DATA, error: exception });
    }
}
export function* commonSagas() {
    yield takeEvery(ActionType.REQ_GET_REFERENCE_DATA, getReferenceDataSaga);
}
//# sourceMappingURL=common-sagas.js.map