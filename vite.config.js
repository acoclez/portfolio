import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import { projects } from './src/data/projects.js'

const SITE_URL = 'https://acoclez.dev'

// Writes sitemap.xml into the build from the router's static pages plus one entry per project,
// each in English and in French (/fr), cross-referenced so search engines pair the two versions
const sitemap = () => ({
    name: 'sitemap',
    apply: 'build',
    generateBundle() {
        const pages = ['/', '/about', '/projects', ...projects.map(project => `/projects/${project.slug}`)]
        const today = new Date().toISOString().slice(0, 10)
        const frPath = page => (page === '/' ? '/fr' : `/fr${page}`)
        const alternate = (hreflang, path) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${SITE_URL}${path}"/>`
        const entry = (loc, page) => [
            '  <url>',
            `    <loc>${SITE_URL}${loc}</loc>`,
            `    <lastmod>${today}</lastmod>`,
            alternate('en', page),
            alternate('fr', frPath(page)),
            alternate('x-default', page),
            '  </url>'
        ].join('\n')
        const urls = pages.flatMap(page => [entry(page, page), entry(frPath(page), page)])

        this.emitFile({
            type: 'asset',
            fileName: 'sitemap.xml',
            source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`
        })
    }
})

// Cloudflare Web Analytics, only when a beacon token is configured (VITE_CF_BEACON_TOKEN)
const cloudflareAnalytics = (token) => ({
    name: 'cloudflare-analytics',
    transformIndexHtml(html) {
        if (!token) return html

        return html.replace(
            '</body>',
            `  <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "${token}"}'></script>\n</body>`
        )
    }
})

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [
            vue(),
            tailwindcss(),
            sitemap(),
            cloudflareAnalytics(env.VITE_CF_BEACON_TOKEN)
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    }
})
