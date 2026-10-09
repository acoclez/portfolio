import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// Serves the Netlify feed function during `npm run dev` / `npm run preview`,
// so the Veille page works locally without the Netlify CLI.
const netlifyFeedFunction = () => {
    const middleware = async (req, res, next) => {
        if (!req.url.startsWith('/.netlify/functions/feed')) return next()

        try {
            const { default: handler } = await import('./netlify/functions/feed.mjs')
            const response = await handler(new Request(new URL(req.url, 'http://localhost')))

            res.statusCode = response.status
            response.headers.forEach((value, key) => res.setHeader(key, value))
            res.end(await response.text())
        } catch (error) {
            next(error)
        }
    }

    return {
        name: 'netlify-feed-function',
        configureServer: (server) => { server.middlewares.use(middleware) },
        configurePreviewServer: (server) => { server.middlewares.use(middleware) }
    }
}

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        netlifyFeedFunction()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
