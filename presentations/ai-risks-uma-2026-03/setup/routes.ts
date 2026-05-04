import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import configs from '#slidev/configs';

export default function (routes: RouteRecordRaw[]) {
  function passwordGuard(to: RouteLocationNormalized) {
    if (!configs.remote || configs.remote === to.query.password) return true;
    if (configs.remote && to.query.password === undefined) {
      // eslint-disable-next-line no-alert
      const password = prompt('Enter password');
      if (configs.remote === password) return true;
    }
    return { path: '' };
  }

  routes.push({
    name: 'mobile',
    path: '/mobile',
    component: () => import('../pages/mobile.vue'),
    beforeEnter: passwordGuard,
  });

  return routes;
}
