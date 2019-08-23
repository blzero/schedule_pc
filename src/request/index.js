class ZRequest {
    constructor(url, request) {
        console.log(request);
        return fetch(url, request).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.status);
        }).catch(err => {
            throw new Error(err);
        });
    }
}

function Request(url, request) {
    return new ZRequest(url, request);
}

export default Request;