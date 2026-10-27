// src/data/techIcons.js
const iconMap = {
  // Frontend Frameworks
  'vue': 'mdi:vuejs',
  'vue.js': 'mdi:vuejs',
  'react': 'mdi:react',
  'angular': 'mdi:angular',
  'nuxt': 'mdi:nuxt',
  'nuxt.js': 'mdi:nuxt',
  'svelte': 'simple-icons:svelte',
  'sveltekit': 'simple-icons:svelte',

  // Backend Frameworks
  'laravel': 'mdi:laravel',
  'symfony': 'mdi:symfony',
  'node': 'mdi:nodejs',
  'node.js': 'mdi:nodejs',

  // Languages
  'javascript': 'mdi:language-javascript',
  'typescript': 'mdi:language-typescript',
  'java': 'mdi:language-java',
  'php': 'mdi:language-php',
  'python': 'mdi:language-python',
  'rust': 'mdi:language-rust',

  // Styling
  'css': 'mdi:language-css3',
  'tailwind': 'mdi:tailwind',
  'tailwind css': 'mdi:tailwind',

  // Databases
  'mysql': 'mdi:database',
  'mongodb': 'mdi:database',
  'postgresql': 'mdi:database',
  'redis': 'mdi:database',
  'sqlite': 'simple-icons:sqlite',

  // Mobile & desktop
  'android': 'mdi:android',
  'android studio': 'mdi:android-studio',
  'ionic': 'mdi:circle-slice-8',
  'react native': 'mdi:react',
  'electron': 'mdi:electron-framework',
  'tauri': 'simple-icons:tauri',

  // Tools & Others
  'docker': 'mdi:docker',
  'kubernetes': 'mdi:kubernetes',
  'git': 'mdi:git',
  'github': 'mdi:github',
  'gitlab': 'mdi:gitlab',
  'websocket': 'mdi:websocket',
  'websockets': 'mdi:websocket',
  'gsap': 'mdi:animation-play',
  'api': 'mdi:api',
  'rest': 'mdi:api',
  'graphql': 'mdi:graphql'
}

export const getTechIcon = (tech) => iconMap[tech.toLowerCase()] || 'mdi:code-tags'
