import errorNotification from './errorNotification'
const responseHandle = (response) => {
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
            if (data.code === 's200') {
                return data;
            }
            return Promise.reject(data)
        }).catch(err => {
            console.error(err)
            errorNotification({
                code: err.code
            });
            throw new Error(JSON.stringify(err));
        })
    }
}

export default responseHandle