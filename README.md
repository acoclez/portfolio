# portfolio

Portfolio d'Antoine Coclez — Vue 3, Vite, Tailwind CSS et GSAP, hébergé sur Netlify.

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

## Veille

Les flux de la page Veille sont récupérés par la fonction Netlify `netlify/functions/feed.mjs`
(Laravel News et les releases de `laravel/framework`). En local, `npm run dev` et
`npm run preview` servent cette même fonction, sans avoir besoin du CLI Netlify.
