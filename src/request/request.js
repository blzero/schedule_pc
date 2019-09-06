import errorNotification from './errorNotification'

import responseHandle from './responseHandle'
const baseUrl = '/api'
const createRequest = (type = 'get') => {
    const factory = async(url, options = {}) => {
        console.log(url, options);
        try {
            if (url.includes('/mdm')) {

            } else {
                url = baseUrl + url;
            }
            if (options.query) {
                let query = '?'
                for (let key in options.query) {
                    query += key + '=' + options.query[key] + '&'
                }
                query = query.slice(0, -1);
                url = url + query;
                delete options.query;
            }
            const response = await fetch(url, Object.assign({ method: type }, options));
            return responseHandle(response)
        } catch (err) {
            errorNotification({
                msg: err.message
            });
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
    static put = createRequest('put');
    static delete = createRequest('delete');
}

export default ZRequest;