import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: HomeView
    },
    {
      path:'/panel',
      name:'panel',
      component: () => import('@/views/Dashboard/PanelView.vue'),
      meta:{
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to,from)=>{
  const auth = useAuthStore().isAuth
  if(to.meta.requiresAuth  && !auth){
    return{
      name:'login'
    }
  }
})

export default router
