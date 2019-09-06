import request from '@/request/request.js';

class UserInfo {
    getUserInfo(options = {}) {
        return request.get('/mdm/auth_user', options);
    }
    getUserPermission() {
        return request.get('/user/permission')
    }
    logout(options = {}) {
        return request.post('/logout', options)
    }
}

const userInfo = new UserInfo()


export default userInfo