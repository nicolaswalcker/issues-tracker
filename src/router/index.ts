import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tasks',
    component: () => import('../views/Tasks.vue'),
  },
  {
    path: '/projetos',
    component: () => import('../views/Projects.vue'),
    children: [
      {
        path: '',
        name: 'Projects',
        component: () => import('../views/Projects/List.vue'),
      },
      {
        path: 'novo',
        name: 'New Project',
        component: () => import('../views/Projects/Form.vue'),
      },
      {
        path: ':id',
        name: 'Editar Projeto',
        component: () => import('../views/Projects/Form.vue'),
        props: true,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
