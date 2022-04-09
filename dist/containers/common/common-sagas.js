"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonSagas = exports.getReferenceDataSaga = void 0;
const effects_1 = require("redux-saga/effects");
const services_1 = require("../../services");
const common_actions_1 = require("./common-actions");
function* getReferenceDataSaga(action) {
    try {
        const referenceData = yield (0, effects_1.call)(services_1.getReferenceData);
        yield (0, effects_1.put)({
            referenceData,
            type: common_actions_1.ActionType.RECV_GET_REFERENCE_DATA
        });
    }
    catch (exception) {
        yield (0, effects_1.put)({ type: common_actions_1.ActionType.XHR_GET_REFERENCE_DATA, error: exception });
    }
}
exports.getReferenceDataSaga = getReferenceDataSaga;
function* commonSagas() {
    yield (0, effects_1.takeEvery)(common_actions_1.ActionType.REQ_GET_REFERENCE_DATA, getReferenceDataSaga);
}
exports.commonSagas = commonSagas;
//# sourceMappingURL=common-sagas.js.map