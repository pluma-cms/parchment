export default [
  {
    path: '/admin/dashboard',
    name: 'dashboard.index',
    component: () => import('../Dashboard.vue'),
    meta: {
      title: 'Dashboard',
      sort: 0,
      authenticatable: true,
      icon: 'dashboard',
    },
  }
]
