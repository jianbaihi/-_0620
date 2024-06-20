import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '',
          name: 'default',
          component: () => import('../views/ItemDetailView.vue'),
        },
        {
          path: 'item',
          name: 'item',
          component: () => import('../views/ItemDetailView.vue'),
        },
        {
          path: 'add',
          name: 'add',
          component: () => import('../views/AddItemView.vue'),
        },
        {
          path: 'update/:id',
          name: 'update',
          component: () => import('../views/updateItemView.vue'),
        },
      ],
    },
  ],
})

export default router
