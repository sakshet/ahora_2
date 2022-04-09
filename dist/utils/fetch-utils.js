export var HttpMethod;
(function (HttpMethod) {
    HttpMethod["Delete"] = "DELETE";
    HttpMethod["Get"] = "GET";
    HttpMethod["Post"] = "POST";
    HttpMethod["Put"] = "PUT";
})(HttpMethod || (HttpMethod = {}));
export async function fetchJson(url, method = HttpMethod.Get) {
    const response = await fetch(url);
    checkStatus(response);
    return parseJson(response);
}
function checkStatus(response) {
    if (response.ok || response.status === 400) {
        return response;
    }
    else {
        throw { status: response.status };
    }
}
export async function parseJson(response) {
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
//# sourceMappingURL=fetch-utils.js.map