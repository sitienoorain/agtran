
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect:'login',
    children: [
      { path: 'main', component: () => import('pages/MainPage.vue') },
      { path: 'edit', component: () => import('pages/EditPage.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
