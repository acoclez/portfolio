// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: '404 - Page non trouvée'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Mise à jour du titre de la page
router.beforeEach((to) => {
  document.title = to.meta.title || 'Antoine Coclez — Portfolio'
})

// Les ScrollTriggers de la page quittée ne sont pas détruits par les composants
router.beforeEach(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

export default router