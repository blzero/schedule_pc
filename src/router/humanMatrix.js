const humanMatrix = {
    "id": null,
    "code": "SCHCD_MATRIX",
    "name": "SCHCD_MATRIX",
    "isReferenced": null,
    "hasPermission": true,
    "permissionCode": "SCHCD_MATRIX",
    path: '/matrix',
    icon: 'el-icon-s-grid',
    meta: {
        title: '人力矩阵'
    },
    "children": [{
            "id": null,
            "code": "SCHCD_MATRIX_CONFIGURATION",
            "name": "SCHCD_MATRIX_CONFIGURATION",
            "isReferenced": null,
            "hasPermission": true,
            "permissionCode": "SCHCD_MATRIX_CONFIGURATION",
            "path": "storeSetting",
            "children": [],
            meta: {
                title: '门店矩阵设置'
            }

        },
        {
            "id": null,
            "code": "SCHCD_MATRIX_TEMPLATE",
            "name": "SCHCD_MATRIX_TEMPLATE",
            "isReferenced": null,
            "hasPermission": true,
            "permissionCode": "SCHCD_MATRIX_TEMPLATE",
            "path": "templateSetting",
            "children": [],
            meta: {
                title: '矩阵模板设置'
            }
        }
    ]
}
export default humanMatrix