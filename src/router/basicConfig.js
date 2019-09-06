const basicConfig =  {
    "id": null,
    "code": "CONFIG",
    "name": "CONFIG",
    "isReferenced": null,
    "hasPermission": true,
    "permissionCode": "SCHCD_BASICS_CONFIGURATION",
    icon: 'el-icon-s-tools',
    path: '/config',
    meta: {
        title: '基础配置'
    },
    "children": [{
            "id": null,
            "code": "CONFIG_QRCODE",
            "name": "CONFIG_QRCODE",
            "isReferenced": null,
            "hasPermission": true,
            "permissionCode": "SCHCD_QRCODE_CREATE",
            "path": "qrcode",
            "children": [],
            meta: {
                title: '二维码生成'
            }
        },
        {
            "id": null,
            "code": "CONFIG_SCHEDULE_TIME",
            "name": "scheduleTime",
            "isReferenced": null,
            "hasPermission": true,
            "permissionCode": "CPY_SCHEDULE_TIME",
            "path": "scheduleTime",
            "children": [],
            meta: {
                title: '班次管理'
            }
        },
        {
            "id": null,
            "code": "CONFIG_SCHEDULE_TIME",
            "name": "defaultScheduleTime",
            "isReferenced": null,
            "hasPermission": true,
            "permissionCode": "CPY_DEFAULT_SCHEDULE_TIME",
            "path": "defaultScheduleTime",
            "children": [],
            meta: {
                title: '默认班次设置'
            }
        },
        {
            "id": null,
            "code": "CONFIG_SCHEDULE_TYPE",
            "name": "CONFIG_SCHEDULE_TYPE",
            "isReferenced": null,
            "hasPermission": true,
            "permissionCode": "SCHED_RESTTYPE_LIST",
            "path": "workRestType",
            "children": [],
            meta: {
                title: '班休类型'
            }
        }
    ]
}
export default basicConfig