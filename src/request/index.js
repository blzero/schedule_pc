import errorNotification from './errorNotification'

import responseHandle from './responseHandle'
const createRequest = (type = 'get') => {
    const factory = async(url, options) => {
        try {
            const response = await fetch(url, Object.assign({ method: type }, options));
            console.log(response.headers.get('Content-Type'));
            return responseHandle(response)
        } catch (err) {
            errorNotification({
                msg: err.text
            });
            throw new Error(err);
        } finally {
            console.log('finally');
        };
    }

    return factory;
}


class ZRequest {
    constructor(url, options) {}
    static get = createRequest('get');
    static post = createRequest('post');
}

export default ZRequest;