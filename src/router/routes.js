const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'intervenant', path: '', component: () => import('pages/IntervenantsPage.vue') },
      { name: 'cycle', path: '', component: () => import('pages/CyclesPage.vue') },
      { path: 'cycle/:id', component: () => import('pages/CyclePage.vue') },
      { path: 'intervenant/:id', component: () => import('pages/IntervenantPage.vue'), props: true },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
