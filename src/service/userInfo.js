import request from '@/request/index.js';

class UserInfo {
    static getUserInfo(options = {}) {
        return request.get('/mdm/auth_user', options);
    }
}



export default UserInfo;