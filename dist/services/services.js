import { BASE_API_URL } from '../shared';
import { fetchJson } from '../utils';
export async function getReferenceData() {
    const url = `${BASE_API_URL}/reference-data`;
    return await fetchJson(url);
}
//# sourceMappingURL=services.js.map