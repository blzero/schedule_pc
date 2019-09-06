import errorNotification from './errorNotification'
const responseHandle = (response) => {
    console.log(response.headers.get('Content-Type'));
    if (response.ok && response.status === 200) {
        let type = response.headers.get('Content-Type');
        let result = null;
        switch (type) {
            case type.includes('application/json'):
                result = response.json();

            default:
                result = response.json();
        }
        return result.then(data => {
            if (data.code === '0' || data.code === 'S200') {
                return data.data;
            }
            return Promise.reject(data)
        }).catch(err => {
            errorNotification({
                code: err.code
            });
        })
    } else {
        errorNotification({
            code: response.status,
            msg: response.statusText
        });
    }
}

export default responseHandle