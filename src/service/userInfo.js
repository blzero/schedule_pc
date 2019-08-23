import request from '@/request/index.js';

class UserInfo {
    static getUserInfo() {
        return request('/mdm/auth_user', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}



export default UserInfo;