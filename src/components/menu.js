 const menuData = [{
        "id": null,
        "code": "MDM_SCHEDULE",
        "name": "排班管理",
        "isReferenced": null,
        "hasPermission": true,
        "permissionCode": "SCHED_CLASS_MGR",
        "children": [{
                "id": null,
                "code": "MDM_SCHEDULE_MANAGEMENT",
                "name": "班表排定",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHED_CLASS_LIST",
                "url": "schedule.management",
                "children": []
            },
            {
                "id": null,
                "code": "MDM_SCHEDULE_MAINTAIN",
                "name": "员工信息维护",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "EMPLOYEE_INFORMATION_MAINTENANCE",
                "url": "schedule.employeeMaintain",
                "children": []
            }
        ]
    },
    {
        "id": null,
        "code": "MDM_ATTENDANCE",
        "name": "考勤日结",
        "isReferenced": null,
        "hasPermission": true,
        "permissionCode": "ATTENDANCE_DAILY_MGR",
        "children": [{
                "id": null,
                "code": "MDM_ATTENDANCE_CONFIRM",
                "name": "考勤确认",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "ATTENDANCE_AFFIRM_MGR",
                "url": "attendance.confirm",
                "children": []
            },
            {
                "id": null,
                "code": "MDM_ATTENDANCE_REPORT",
                "name": "考勤报表",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "ATTENDANCE_STATEMENT_MGR",
                "url": "attendance.report",
                "children": []
            },
            {
                "id": null,
                "code": "MDM_ATTENDANCE_RULE",
                "name": "规则设定",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "CARD_RULE_LIST",
                "url": "attendance.rule",
                "children": []
            },
            {
                "id": null,
                "code": "MDM_ATTENDANCE_EHR_EXPORT",
                "name": "考勤导出-人资",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "ATTENDANCE_EXPORT",
                "url": "attendance.ehrExport",
                "children": []
            },
            {
                "id": null,
                "code": "MDM_ATTENDANCE_OTH_EXPORT",
                "name": "异常导出-人资",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "ATTENDANCE_EXPORT",
                "url": "attendance.otherExport",
                "children": []
            }
        ]
    },
    {
        "id": null,
        "code": "ESTIMATE",
        "name": "预估配置",
        "isReferenced": null,
        "hasPermission": true,
        "permissionCode": "SCHCD_ESTIMATE_CONFIGURE",
        "children": [{
                "id": null,
                "code": "ESTIMATE_FACTOR_TYPE",
                "name": "影响因素类型维护",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHCD_FACTOR_TYPE_LIST",
                "url": "estimate.factorType",
                "children": []
            },
            {
                "id": null,
                "code": "ESTIMATE_FACTOR_NAME",
                "name": "影响因素名称维护",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHCD_FACTOR_NAME_LIST",
                "url": "estimate.factorName",
                "children": []
            },
            {
                "id": null,
                "code": "ESTIMATE_BUSINESS_DATA",
                "name": "营业数据导入",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHCD_TURNOVER_IMPORT",
                "url": "estimate.businessData",
                "children": []
            }
        ]
    },
    {
        "id": null,
        "code": "CONFIG",
        "name": "基础配置",
        "isReferenced": null,
        "hasPermission": true,
        "permissionCode": "SCHCD_BASICS_CONFIGURATION",
        "children": [{
                "id": null,
                "code": "CONFIG_QRCODE",
                "name": "二维码生成",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHCD_QRCODE_CREATE",
                "url": "config.qrcode",
                "children": []
            },
            {
                "id": null,
                "code": "CONFIG_SCHEDULE_TIME",
                "name": "班次管理",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "CPY_SCHEDULE_TIME",
                "url": "config.scheduleTime",
                "children": []
            },
            {
                "id": null,
                "code": "CONFIG_SCHEDULE_TIME",
                "name": "默认班次设置",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "CPY_DEFAULT_SCHEDULE_TIME",
                "url": "config.defaultScheduleTime",
                "children": []
            },
            {
                "id": null,
                "code": "CONFIG_SCHEDULE_TYPE",
                "name": "班休类型",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHED_RESTTYPE_LIST",
                "url": "config.workRestType",
                "children": []
            }
        ]
    },
    {
        "id": null,
        "code": "SCHCD_MATRIX",
        "name": "人力矩阵",
        "isReferenced": null,
        "hasPermission": true,
        "permissionCode": "SCHCD_MATRIX",
        "children": [{
                "id": null,
                "code": "SCHCD_MATRIX_CONFIGURATION",
                "name": "门店矩阵设置",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHCD_MATRIX_CONFIGURATION",
                "url": "matrix.setting",
                "children": []
            },
            {
                "id": null,
                "code": "SCHCD_MATRIX_TEMPLATE",
                "name": "矩阵模板设置",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHCD_MATRIX_TEMPLATE",
                "url": "matrix.template",
                "children": []
            }
        ]
    },
    {
        "id": null,
        "code": "SCHCD_REPORTFORMS_HUB",
        "name": "报表中心",
        "isReferenced": null,
        "hasPermission": true,
        "permissionCode": "SCHCD_REPORTFORMS_HUB",
        "children": [{
                "id": null,
                "name": "运营报表",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHCD_REPORTFORMS_HUB",
                "url": "report.chart",
                "children": []
            },
            {
                "id": null,
                "code": "SCHCD_REPORTFORMS_HUB",
                "name": "执行汇总报表",
                "isReferenced": null,
                "hasPermission": true,
                "permissionCode": "SCHCD_REPORTFORMS_HUB",
                "url": "report.execSummary",
                "children": []
            }
        ]
    }
];
export default menuData;