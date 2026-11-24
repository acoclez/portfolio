// src/i18n/meta.js
// Keeps <html lang>, the title, the description and the canonical / alternate links in sync with the page.
import { DEFAULT_LOCALE, getLocale, localePath, stripLocale } from './index.js'

const SITE_URL = 'https://acoclez.dev'

const setLink = (selector, attributes) => {
  let link = document.head.querySelector(selector)

  if (!link) {
    link = document.createElement('link')
    document.head.appendChild(link)
  }

  for (const [name, value] of Object.entries(attributes)) {
    link.setAttribute(name, value)
  }
}

export const applyPageMeta = ({ title, description }, path) => {
  const basePath = stripLocale(path)
  const urls = {
    en: SITE_URL + localePath(basePath, 'en'),
    fr: SITE_URL + localePath(basePath, 'fr')
  }

  document.documentElement.lang = getLocale()
  document.title = title
  document.head.querySelector('meta[name="description"]')?.setAttribute('content', description)

  setLink('link[rel="canonical"]', { rel: 'canonical', href: urls[getLocale()] })
  setLink('link[rel="alternate"][hreflang="en"]', { rel: 'alternate', hreflang: 'en', href: urls.en })
  setLink('link[rel="alternate"][hreflang="fr"]', { rel: 'alternate', hreflang: 'fr', href: urls.fr })
  setLink('link[rel="alternate"][hreflang="x-default"]', { rel: 'alternate', hreflang: 'x-default', href: urls[DEFAULT_LOCALE] })
}
