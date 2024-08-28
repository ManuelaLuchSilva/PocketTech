import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PagCadastro from '@/views/PagCadastro.vue'
import PagPecas from '@/views/PagPecas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: PagCadastro
    },
    {
      path: '/pecas',
      name: 'pecas',
      component: PagPecas
    },
    }
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/admentreesaida',
      name: 'admentreesaida',
      component: () => import('../views/AdmentresaidaView.vue')
    },
    {
      path: '/admmargemfatu',
      name: 'admmargemfatu',
      component: () => import('../views/AdmmargemfatuView.vue')
    },
    {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPag.vue')
    }
  ]
})

export default router