import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '../stores/user'
// import { storeToRefs } from 'pinia'



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
    {
      path:'/:pathMatch(.*)*',
      name:'404',
      component:()=>import('../views/404View.vue')
    }
  ],
  
})
router.beforeEach((to, from, next) => {
  const islogin = localStorage.getItem('islogin')
  // const { islogin } = useUserStore()
  if (islogin) {
    next()
  } else {
    // 未登录
    if (to.path !== '/login') {
      alert('请先登录')
      next('/login')
    } else {
      next()
    }
  }
  })

export default router
