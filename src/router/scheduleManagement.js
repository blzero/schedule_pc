const scheduleManagement = {
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
}
export default scheduleManagement