export default [
  {
    path: '/admin/courses',
    component: () => import('@/App.vue'),
    meta: {
      title: 'Courses',
      sort: 5,
      authenticatable: true,
      icon: 'mdi-book-multiple',
    },
    children: [
      {
        path: '',
        name: 'courses.index',
        component: () => import('../Index.vue'),
        meta: {
          title: 'All Courses',
          authenticatable: true,
          icon: 'mdi-file-multiple',
        },
      },

      {
        path: 'create',
        name: 'courses.create',
        component: () => import('../Create.vue'),
        meta: {
          title: 'Create Course',
          authenticatable: true,
          icon: 'mdi-file-plus',
        },
      },
    ],
  }
]
