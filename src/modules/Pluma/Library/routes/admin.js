export default [
  {
    path: 'library',
    name: 'library.index',
    component: () => import('../Index.vue'),
    meta: {
      title: 'Library',
      sort: 100,
      authenticatable: true,
      icon: 'mdi-folder-multiple',
    },
  }
]
