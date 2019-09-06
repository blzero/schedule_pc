const attendanceDay = {
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
}
export default attendanceDay