import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  // {
  //   path: '/',
  //   component: () => import('components/Layout/index.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Home.vue') },
  //     { path: 'services', component: () => import('pages/Services.vue') },
  //     { path: 'about', component: () => import('pages/About.vue') }
  //   ]
  // }
  {
    path: '/',
    component: () => import('pages/Home.vue')
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
