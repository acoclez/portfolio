// src/router/index.js
import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DEFAULT_LOCALE, localeOfPath, localePath, preferredLocale, setLocale, stripLocale, t } from '../i18n'
import { applyPageMeta } from '../i18n/meta'

// Every page exists twice: in English at its own path, and in French under /fr
const pages = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/projects', name: 'projects', component: () => import('../views/ProjectsView.vue') },
  { path: '/projects/:slug', name: 'project', component: () => import('../views/ProjectDetailView.vue'), props: true }
]

const routes = [
  ...pages.map(page => ({ ...page, meta: { page: page.name, locale: DEFAULT_LOCALE } })),
  ...pages.map(page => ({
    ...page,
    path: localePath(page.path, 'fr'),
    name: `fr-${page.name}`,
    meta: { page: page.name, locale: 'fr' }
  })),
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue')
  }
]

// Same page in the other language: the page stays mounted and only its texts change
const isLanguageSwitch = (to, from) =>
  from.matched.length > 0 && to.meta.page === from.meta.page && stripLocale(to.path) === stripLocale(from.path)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from) {
    // Keep the reader where they are when they only switch language
    return isLanguageSwitch(to, from) ? false : { top: 0 }
  }
})

let firstVisit = true

router.beforeEach((to, from) => {
  const locale = to.meta.locale || localeOfPath(to.path)

  // On arrival only: an English URL is shown in French to visitors who chose French before,
  // or whose browser is in French and who have not chosen yet
  if (firstVisit) {
    firstVisit = false

    const preferred = preferredLocale()

    if (to.meta.page && locale === DEFAULT_LOCALE && preferred !== DEFAULT_LOCALE) {
      return { path: localePath(to.path, preferred), query: to.query, hash: to.hash, replace: true }
    }
  }

  setLocale(locale)

  // Les ScrollTriggers de la page quittée ne sont pas détruits par les composants
  if (!isLanguageSwitch(to, from)) {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
})

// Title, description, <html lang> and alternate links (project pages set their own, from the project data)
router.afterEach((to, from) => {
  const page = to.meta.page || 'notFound'

  if (page !== 'project') {
    applyPageMeta({ title: t(`meta.${page}.title`), description: t(`meta.${page}.description`) }, to.path)
  }

  // Translated texts don't have the same length: let the scroll animations measure the page again
  if (isLanguageSwitch(to, from)) {
    nextTick(() => ScrollTrigger.refresh())
  }
})

export default router
