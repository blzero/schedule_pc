import { Notification } from 'element-ui';

const errorNotification = (errObj) => {
    Notification({
        title: errObj.code || 'error',
        message: errObj.msg || errObj.code,
        type: 'error'
    });
}

export default errorNotification