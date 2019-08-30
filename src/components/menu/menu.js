 const menuData = [{
        "id": null,
        "code": "MDM_SCHEDULE",
        "name": "MDM_SCHEDULE",
        "isReferenced": null,
        "hasPermission": true,
        "permissionCode": "SCHED_CLASS_MGR",
        "path": '/schedule',
        component: () => import( /* webpackChunkName: "schedule" */ '@/pages/schedule/schedule.vue'),
        icon: 'el-icon-s-cooperation',
        meta: {
            title: "排班管理",
        },
        "children": [{
                "id": null,
                "code": "MDM_SCHEDULE_MANAGEMENT",
                "name": "MDM_SCHEDULE_MANAGEMENT",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHED_CLASS_LIST",
                "path": "management",
                component: () => import( /* webpackChunkName: "schedule" */ '@/pages/schedule/management.vue'),
                "children": [],
                meta: {
                    title: '班表排定'
                }
            },
            {
                "id": null,
                "code": "MDM_SCHEDULE_MAINTAIN",
                "name": "MDM_SCHEDULE_MAINTAIN",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "EMPLOYEE_INFORMATION_MAINTENANCE",
                "path": "employeeMaintain",
                "children": [],
                meta: {
                    title: '员工信息维护'
                }
            }
        ]
    },
    {
        "id": null,
        "code": "MDM_ATTENDANCE",
        "name": "MDM_ATTENDANCE",
        "isReferenced": null,
        "hasPermission": true,
        "permissionCode": "ATTENDANCE_DAILY_MGR",
        path: '/attendance',
        icon: 'el-icon-s-claim',
        meta: {
            title: '考勤日结'
        },
        "children": [{
                "id": null,
                "code": "MDM_ATTENDANCE_CONFIRM",
                "name": "MDM_ATTENDANCE_CONFIRM",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "ATTENDANCE_AFFIRM_MGR",
                "path": "confirm",
                "children": [],
                meta: {
                    title: '考勤确认',
                }
            },
            {
                "id": null,
                "code": "MDM_ATTENDANCE_REPORT",
                "name": "MDM_ATTENDANCE_REPORT",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "ATTENDANCE_STATEMENT_MGR",
                "path": "report",
                "children": [],
                meta: {
                    title: '考勤报表',
                }
            },
            {
                "id": null,
                "code": "MDM_ATTENDANCE_RULE",
                "name": "MDM_ATTENDANCE_RULE",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "CARD_RULE_LIST",
                "path": "rule",
                "children": [],
                meta: {
                    title: '规则设定',
                }
            },
            {
                "id": null,
                "code": "MDM_ATTENDANCE_EHR_EXPORT",
                "name": "MDM_ATTENDANCE_EHR_EXPORT",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "ATTENDANCE_EXPORT",
                "path": "ehrExport",
                "children": [],
                meta: {
                    title: '考勤导出-人资',
                }
            },
            {
                "id": null,
                "code": "MDM_ATTENDANCE_OTH_EXPORT",
                "name": "MDM_ATTENDANCE_OTH_EXPORT",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "ATTENDANCE_EXPORT",
                "path": "otherExport",
                "children": [],
                meta: {
                    title: '异常导出-人资'
                }
            }
        ]
    },
    {
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
    },
    {
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
    },
    {
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
                "path": "store-setting",
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
                "path": "template-setting",
                "children": [],
                meta: {
                    title: '矩阵模板设置'
                }
            }
        ]
    },
    {
        "id": null,
        "code": "SCHCD_REPORTFORMS_HUB",
        "name": "report",
        "isReferenced": null,
        "hasPermission": true,
        "permissionCode": "SCHCD_REPORTFORMS_HUB",
        path: '/report',
        icon: 'el-icon-s-data',
        meta: {
            title: '报表中心'
        },
        "children": [{
                "id": null,
                "name": "operatingReports",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHCD_REPORTFORMS_HUB",
                "path": "operating-reports",
                "children": [],
                meta: {
                    title: '运营报表'
                }
            },
            {
                "id": null,
                "code": "SCHCD_REPORTFORMS_HUB",
                "name": "execSummaryReports",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHCD_REPORTFORMS_HUB",
                "path": "execSummary-reports",
                "children": [],
                meta: {
                    title: '执行汇总报表',
                }
            }
        ]
    }
];
export default menuData;