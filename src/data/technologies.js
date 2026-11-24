// src/data/technologies.js
// Group labels are translated in src/i18n (skills.groups.<key>)
export const skillGroups = [
  {
    key: 'backend',
    icon: 'mdi:server',
    items: [
      { name: 'PHP', icon: 'mdi:language-php' },
      { name: 'Laravel', icon: 'mdi:laravel' },
      { name: 'Symfony', icon: 'mdi:symfony' },
      { name: 'Node.js', icon: 'mdi:nodejs' },
      { name: 'MySQL', icon: 'mdi:database' },
      { name: 'REST', icon: 'mdi:api' }
    ]
  },
  {
    key: 'frontend',
    icon: 'mdi:monitor',
    items: [
      { name: 'HTML', icon: 'mdi:language-html5' },
      { name: 'CSS', icon: 'mdi:language-css3' },
      { name: 'JavaScript', icon: 'mdi:language-javascript' },
      { name: 'TypeScript', icon: 'mdi:language-typescript' },
      { name: 'Vue.js', icon: 'mdi:vuejs' },
      { name: 'Svelte', icon: 'simple-icons:svelte' },
      { name: 'SvelteKit', icon: 'simple-icons:svelte' },
      { name: 'Tailwind', icon: 'mdi:tailwind' }
    ]
  },
  {
    key: 'tools',
    icon: 'mdi:tools',
    items: [
      { name: 'Git', icon: 'mdi:git' },
      { name: 'GitHub', icon: 'mdi:github' },
      { name: 'Docker', icon: 'mdi:docker' },
      { name: 'Linux', icon: 'mdi:linux' },
      { name: 'JetBrains', icon: 'simple-icons:jetbrains' },
      { name: 'Claude Code', icon: 'simple-icons:claude' },
      { name: 'OpenClaw', icon: 'mdi:console' },
      { name: 'Trello', icon: 'mdi:trello' },
      { name: 'Jira', icon: 'mdi:jira' },
      { name: 'Figma', icon: 'simple-icons:figma' },
      { name: 'Gantt', icon: 'mdi:chart-gantt' }
    ]
  }
]
