// netlify/functions/feed.mjs
// Fetches an allow-listed RSS/Atom feed server-side (no CORS issue) and returns normalized JSON.
import { XMLParser } from 'fast-xml-parser'

const FEEDS = {
  news: 'https://feed.laravel-news.com/',
  releases: 'https://github.com/laravel/framework/releases.atom'
}

const MAX_ITEMS = 5
const MAX_DESCRIPTION_LENGTH = 300

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text'
})

const toArray = (value) => (value === undefined || value === null ? [] : [].concat(value))

const toText = (value) => {
  if (value === undefined || value === null) return ''
  if (typeof value === 'object') return toText(value['#text'] ?? value.name)
  return String(value).trim()
}

const HTML_ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }

const decodeEntities = (text) =>
  text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => HTML_ENTITIES[name.toLowerCase()] ?? match)

const toPlainText = (html) => {
  const text = decodeEntities(toText(html).replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    // Laravel News appends "The post X appeared first on Laravel News." to every description
    .replace(/\s*The post .* appeared first on .*$/i, '')
    .trim()

  return text.length > MAX_DESCRIPTION_LENGTH
    ? `${text.slice(0, MAX_DESCRIPTION_LENGTH).trimEnd()}…`
    : text
}

const cleanLink = (link) => {
  try {
    const url = new URL(link)
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return ''
    for (const param of [...url.searchParams.keys()]) {
      if (param.startsWith('utm_')) url.searchParams.delete(param)
    }
    return url.toString()
  } catch {
    return ''
  }
}

const toIsoDate = (value) => {
  const date = new Date(toText(value))
  return Number.isNaN(date.getTime()) ? null : date.toISOString()
}

const atomLink = (links) => {
  const candidates = toArray(links)
  const alternate = candidates.find((link) => link?.['@_rel'] === 'alternate') ?? candidates[0]
  return toText(alternate?.['@_href'] ?? alternate)
}

const normalize = (xml) => {
  const document = parser.parse(xml)

  const items = document.rss
    ? toArray(document.rss.channel?.item).map((item) => ({
        title: toText(item.title),
        link: cleanLink(toText(item.link)),
        date: toIsoDate(item.pubDate),
        author: toText(item['dc:creator'] ?? item.author),
        description: toPlainText(item.description)
      }))
    : toArray(document.feed?.entry).map((entry) => ({
        title: toText(entry.title),
        link: cleanLink(atomLink(entry.link)),
        date: toIsoDate(entry.updated ?? entry.published),
        // GitHub releases are mostly published by a bot account, not worth showing
        author: toText(entry.author).replace(/^.*\[bot]$/, ''),
        description: toPlainText(entry.summary ?? entry.content)
      }))

  return items.filter((item) => item.title && item.link).slice(0, MAX_ITEMS)
}

const json = (body, status, headers = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers }
  })

const fetchFeed = async (url) => {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'acoclez-portfolio-feed',
      Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml'
    },
    signal: AbortSignal.timeout(8000)
  })

  if (!response.ok) {
    throw new Error(`Upstream responded with ${response.status}`)
  }

  return response.text()
}

export default async (request) => {
  const name = new URL(request.url).searchParams.get('name')

  if (!Object.hasOwn(FEEDS, name)) {
    return json({ error: 'Unknown feed' }, 400)
  }

  try {
    return json({ items: normalize(await fetchFeed(FEEDS[name])) }, 200, {
      'Cache-Control': 'public, max-age=900',
      // Netlify's CDN keeps the response for an hour, so the upstream feeds are rarely hit
      'Netlify-CDN-Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    })
  } catch (error) {
    console.error(`Feed "${name}" failed:`, error)
    return json({ error: 'Feed unavailable' }, 502)
  }
}
