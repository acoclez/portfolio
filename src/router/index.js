// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Antoine Coclez — Développeur'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Antoine Coclez — A propos'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: {
      title: 'Antoine Coclez — Projets'
    }
  },
  {
    path: '/veille',
    name: 'veille',
    component: () => import('../views/VeilleView.vue'),
    meta: {
      title: 'Antoine Coclez — Veille'
    }
  },
  /*
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Antoine Coclez — Contact'
    }
  }
  */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Mise à jour du titre de la page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Antoine Coclez — Portfolio'
  next()
})

export default router