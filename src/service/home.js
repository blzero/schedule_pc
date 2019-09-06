import request from '@/request/request.js';

class Home {
    //分页搜索门店列表
    getStoreList(options = {}) {
        return request.get('/mdm/stores', options);
    }
    //员工工时统计
    getEmployeeHour(options) {
        return request.get('/homes/getEmployeeHour', options)
    }
    // 全职兼职比例
    getFullTime(options = {}) {
        return request.get('/homes/getFullTime', options)
    }
    // 营业额与总工时
    getTurnover(options = {}) {
        return request.get('/homes/getTurnover', options)
    }
    //异常提醒
    getAbnormal(options = {}) {
        return request.get('/homes/getAbnormal', options)
    }
}

const homeService = new Home()


export default homeService