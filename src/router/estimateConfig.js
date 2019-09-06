const estimateConfig = {
    "id": null,
    "code": "ESTIMATE",
    "name": "ESTIMATE",
    "isReferenced": null,
    "hasPermission": true,
    "permissionCode": "SCHCD_ESTIMATE_CONFIGURE",
    path: '/estimate',
    icon: 'el-icon-s-management',
    meta: {
        title: '预估配置'
    },
    "children": [{
            "id": null,
            "code": "ESTIMATE_FACTOR_TYPE",
            "name": "ESTIMATE_FACTOR_TYPE",
            "isReferenced": null,
            "hasPermission": true,
            "permissionCode": "SCHCD_FACTOR_TYPE_LIST",
            "path": "factorType",
            "children": [],
            meta: {
                title: '影响因素类型维护'
            }
        },
        {
            "id": null,
            "code": "ESTIMATE_FACTOR_NAME",
            "name": "ESTIMATE_FACTOR_NAME",
            "isReferenced": null,
            "hasPermission": true,
            "permissionCode": "SCHCD_FACTOR_NAME_LIST",
            "path": "factorName",
            "children": [],
            meta: {
                title: '影响因素名称维护'
            }
        },
        {
            "id": null,
            "code": "ESTIMATE_BUSINESS_DATA",
            "name": "ESTIMATE_BUSINESS_DATA",
            "isReferenced": null,
            "hasPermission": true,
            "permissionCode": "SCHCD_TURNOVER_IMPORT",
            "path": "businessData",
            "children": [],
            meta: {
                title: '营业数据导入'
            }
        }
    ]
}
export default estimateConfig