const scheduleManagement = [{
    "id": null,
    "code": "MDM_SCHEDULE",
    "name": "排班管理",
    "isReferenced": null,
    "hasPermission": true,
    "permissionCode": "SCHED_CLASS_MGR",
    "path": '/schedule',
    "children": [{
            "id": null,
            "code": "MDM_SCHEDULE_MANAGEMENT",
            "name": "班表排定",
            "isReferenced": null,
            "hasPermission": true,
            "permissionCode": "SCHED_CLASS_LIST",
            "path": "management",
            "children": []
        },
        {
            "id": null,
            "code": "MDM_SCHEDULE_MAINTAIN",
            "name": "员工信息维护",
            "isReferenced": null,
            "hasPermission": true,
            "permissionCode": "EMPLOYEE_INFORMATION_MAINTENANCE",
            "path": "employeeMaintain",
            "children": []
        }
    ]
}];

export default scheduleManagement;