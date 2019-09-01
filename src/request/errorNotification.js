import { Notification } from 'element-ui';

const errorNotification = (errObj) => {
    Notification({
        title: 'error',
        message: errObj.msg || errObj.code,
        type: 'error'
    });
}

export default errorNotification