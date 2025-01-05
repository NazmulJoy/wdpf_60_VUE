import FormInput from '@/views/FormInput.vue'
import LifeCycle from '@/views/LifeCycle.vue'
import RefPage from '@/views/RefPage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ref',
      component: RefPage,
    },
    {
      path: '/life',
      name: 'LifeCycle',
      component: LifeCycle,
    },
    {
      path: '/form',
      name: 'form input',
      component: FormInput,
    },
   
  ],
})

export default router
