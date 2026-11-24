// src/i18n/index.js
// Small i18n layer: English by default at "/", French under "/fr".
// Components use $t('some.key') for text and $lp('/about') for links.
import { reactive } from 'vue'
import en from './en.js'
import fr from './fr.js'

export const DEFAULT_LOCALE = 'en'
export const LOCALES = ['en', 'fr']

const STORAGE_KEY = 'locale'
const messages = { en, fr }
const state = reactive({ locale: DEFAULT_LOCALE })

const lookup = (dictionary, key) => key.split('.').reduce((node, part) => node?.[part], dictionary)

export const getLocale = () => state.locale

export const setLocale = (locale) => {
  state.locale = LOCALES.includes(locale) ? locale : DEFAULT_LOCALE
}

// Text for the current locale; falls back to English, then to the key itself
export const t = (key) => lookup(messages[state.locale], key) ?? lookup(messages[DEFAULT_LOCALE], key) ?? key

// '/about' -> '/fr/about' in French, unchanged in English
export const localePath = (path, locale = state.locale) => {
  if (locale === DEFAULT_LOCALE) return path

  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

export const localeOfPath = (path) => (/^\/fr(\/|$)/.test(path) ? 'fr' : DEFAULT_LOCALE)

// '/fr/about' -> '/about'
export const stripLocale = (path) => path.replace(/^\/fr(?=\/|$)/, '') || '/'

// The visitor's explicit choice (language switch) wins over the browser language
export const rememberLocale = (locale) => {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Storage can be unavailable (private mode): the choice just isn't remembered
  }
}

export const preferredLocale = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (LOCALES.includes(stored)) return stored
  } catch {
    // Fall through to the browser language
  }

  const browser = (navigator.languages?.[0] || navigator.language || '').toLowerCase()

  return browser.startsWith('fr') ? 'fr' : DEFAULT_LOCALE
}

export default {
  install(app) {
    app.config.globalProperties.$t = t
    app.config.globalProperties.$lp = localePath
    app.config.globalProperties.$i18n = state
  }
}
