const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'intervenant', component: () => import('src/pages/IntervenantsPage.vue') },
      { path: 'cycle', component: () => import('pages/CyclesPage.vue') },
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
