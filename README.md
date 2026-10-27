# portfolio

Portfolio d'Antoine Coclez — Vue 3, Vite, Tailwind CSS et GSAP, hébergé sur Cloudflare Workers (déploiement automatique depuis GitHub).

## Installation

```
npm install
```

## Développement

```
npm run dev
```

## Build de production

```
npm run build
npm run preview
```

## Lint

```
npm run lint
```

## Déploiement

Chaque push sur `main` est construit et déployé par Cloudflare Workers Builds (`npm run build`, puis `wrangler deploy`).
La configuration du Worker est dans `wrangler.jsonc` ; pour déployer à la main : `npm run deploy`.
