"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJson = exports.fetchJson = exports.HttpMethod = void 0;
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["Delete"] = "DELETE";
    HttpMethod["Get"] = "GET";
    HttpMethod["Post"] = "POST";
    HttpMethod["Put"] = "PUT";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
async function fetchJson(url, method = HttpMethod.Get) {
    const response = await fetch(url);
    checkStatus(response);
    return parseJson(response);
}
exports.fetchJson = fetchJson;
function checkStatus(response) {
    if (response.ok || response.status === 400) {
        return response;
    }
    else {
        throw { status: response.status };
    }
}
async function parseJson(response) {
    if (response.status === 204) {
        return;
    }
    else if (response.status === 400) {
        return response.json().then(json => {
            if (json.statusCode === 400) {
                throw { status: json.statusCode, messages: json.messages };
            }
            else {
                throw { status: json.statusCode };
            }
        });
    }
    else {
        return response.json();
    }
}
exports.parseJson = parseJson;
//# sourceMappingURL=fetch-utils.js.map