"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReferenceData = void 0;
const shared_1 = require("../shared");
const utils_1 = require("../utils");
async function getReferenceData() {
    const url = `${shared_1.BASE_API_URL}/reference-data`;
    return await (0, utils_1.fetchJson)(url);
}
exports.getReferenceData = getReferenceData;
//# sourceMappingURL=services.js.map