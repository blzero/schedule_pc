const reportCenter = {
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

export default reportCenter