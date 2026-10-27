// src/data/projects.js
//
// One entry per project. The card uses `title`, `summary`, `thumbnail` and `technologies`;
// the detail page (/projects/<slug>) uses everything else.
//
// TODO: add more screenshots per project in public/assets/img/<slug>/ and list them in `images`
//       (the first image is the one shown large), then flesh out the `sections` texts.
//
// `featured` projects are the ones shown on the home page.
export const projects = [
  {
    slug: 'doppler',
    title: "Doppler",
    type: 'Projet personnel',
    summary: "Assistant poussé multifonction pour Crossout",
    thumbnail: '/assets/img/Doppler.png',
    images: ['/assets/img/Doppler.png'],
    technologies: ['Rust', 'Tauri', 'Svelte', 'Tailwind', 'SQLite'],
    featured: true,
    sections: [
      {
        title: "Le projet",
        body: "Doppler est une application de bureau qui accompagne les joueurs de Crossout pendant qu'ils jouent. Elle lit les fichiers de log que le jeu écrit sur le PC, et uniquement cela : elle n'écrit jamais dedans et ne touche pas au processus du jeu."
      },
      {
        title: "Ce qu'elle fait",
        body: "Un journal de combat qui suit la bataille en cours en direct, archive chaque partie et en tire des statistiques par carte, par arme et par mode, ainsi que le détail des gains. Un traducteur de chat qui affiche les messages traduits dans une fenêtre superposée au jeu, ouverte et fermée par un raccourci global, sans jamais voler le clavier."
      },
      {
        title: "Pourquoi",
        body: "Le jeu supprime lui-même ses anciens logs et n'offre ni historique ni statistiques : Doppler conserve des années de parties et les rend lisibles. La communauté de Crossout est très internationale, d'où le traducteur intégré."
      },
      {
        title: "Côté technique",
        body: "Application Tauri 2 : un backend Rust qui surveille le dossier de logs toutes les 350 ms et pousse ses changements à une interface SvelteKit par événements. Chaque fonctionnalité est un module indépendant avec sa propre base SQLite. Les batailles sont stockées compressées en zstd avec un dictionnaire entraîné sur de vraies parties, et des tables de statistiques dédiées permettent d'interroger des centaines de milliers de batailles en une fraction de seconde."
      }
    ]
  },
  {
    slug: 'agri-plus',
    title: "Agri+",
    type: 'Projet scolaire',
    summary: "Outil de gestion poussé pour les agriculteurs",
    thumbnail: '/assets/img/AGRIPLUS.png',
    images: ['/assets/img/AGRIPLUS.png'],
    technologies: ['Laravel', 'Vue', 'MySQL', 'Ionic'],
    sections: [
      {
        title: "Le projet",
        body: "Agri+ est un outil de gestion destiné aux agriculteurs : il centralise le suivi de l\'exploitation au quotidien dans une application accessible sur ordinateur comme sur mobile."
      },
      {
        title: "À quoi ça sert",
        body: "Remplacer les carnets et tableurs éparpillés par un seul outil, pensé pour être utilisé rapidement, sur le terrain, sans formation."
      },
      {
        title: "Côté technique",
        body: "Une API Laravel adossée à une base MySQL, consommée par une interface Vue et déclinée en application mobile avec Ionic."
      }
    ]
  },
  {
    slug: 'vlib',
    title: "VLIB",
    type: 'Projet scolaire',
    summary: "Application mobile de gestion de parc pour une entreprise de vélos en libre-service",
    thumbnail: '/assets/img/VLIB.png',
    images: ['/assets/img/VLIB.png'],
    technologies: ['Android Studio', 'Java', 'PHP', 'MySQL'],
    github: 'https://github.com/acoclez/VLIB',
    featured: true,
    sections: [
      {
        title: "Le projet",
        body: "Application Android développée pour VLIB, une entreprise de vélos en libre-service, afin de gérer son parc : stations, plots, vélos et leur état."
      },
      {
        title: "À quoi ça sert",
        body: "Permettre aux techniciens de consulter une station, voir quels plots sont occupés, l\'état de chaque vélo et son historique, et de mettre à jour ces informations directement sur le terrain."
      },
      {
        title: "Côté technique",
        body: "Application native en Java sous Android Studio, qui communique avec une API PHP et une base MySQL hébergées côté serveur."
      }
    ]
  },
  {
    slug: 'm2l',
    title: "M2L",
    type: 'Projet scolaire',
    summary: "Site de la Maison des Ligues de Lorraine",
    thumbnail: '/assets/img/M2L.webp',
    images: ['/assets/img/M2L.webp'],
    technologies: ['PHP', 'MySQL'],
    github: 'https://github.com/acoclez/AP-2.5-M2L',
    sections: [
      {
        title: "Le projet",
        body: "Site web de la Maison des Ligues de Lorraine (M2L), la structure qui héberge et accompagne les ligues sportives régionales."
      },
      {
        title: "À quoi ça sert",
        body: "Présenter la M2L, ses ligues et ses services, et offrir un point d\'entrée unique pour les informations pratiques et l\'actualité."
      },
      {
        title: "Côté technique",
        body: "Site développé en PHP avec une base MySQL, sans framework, pour maîtriser toute la chaîne du routage à l\'affichage."
      }
    ]
  },
  {
    slug: 'portfolio',
    title: "Portfolio",
    type: 'Projet personnel',
    summary: "Ce site : mon portfolio pour présenter mon profil et mes projets",
    thumbnail: '/assets/img/portfolio.png',
    images: ['/assets/img/portfolio.png'],
    technologies: ['Vue', 'Tailwind', 'GSAP'],
    github: 'https://github.com/acoclez/portfolio',
    demo: '/',
    sections: [
      {
        title: "Le projet",
        body: "Le site sur lequel vous êtes. Une application Vue 3 construite avec Vite, stylée avec Tailwind CSS et animée avec GSAP."
      },
      {
        title: "À quoi ça sert",
        body: "Présenter qui je suis, ce que je sais faire et sur quoi j\'ai travaillé, avec une identité visuelle qui me ressemble plutôt qu\'un template."
      },
      {
        title: "Côté technique",
        body: "Site entièrement statique, hébergé sur Cloudflare. Les animations d\'entrée et au défilement sont centralisées dans un composable GSAP réutilisé par toutes les pages."
      }
    ]
  },
  {
    slug: 'xodrip',
    title: "XoDrip",
    type: 'Projet personnel',
    summary: "Outil de prévisualisation de la customisation de profil pour le jeu Crossout",
    thumbnail: '/assets/img/xodrip.webp',
    images: ['/assets/img/xodrip.webp'],
    technologies: ['Svelte', 'Tailwind'],
    github: 'https://github.com/acoclez/XoDrip',
    demo: 'https://xodrip.netlify.app',
    sections: [
      {
        title: "Le projet",
        body: "XoDrip permet aux joueurs de Crossout de prévisualiser la customisation de leur profil avant de dépenser quoi que ce soit en jeu."
      },
      {
        title: "À quoi ça sert",
        body: "Le jeu ne permet pas d\'essayer les combinaisons : XoDrip reproduit le rendu pour tester les options et partager le résultat."
      },
      {
        title: "Côté technique",
        body: "Application Svelte stylée avec Tailwind, déployée sur Netlify. Tout se passe dans le navigateur, sans backend."
      }
    ]
  },
  {
    slug: 'xotranslate',
    title: "XoTranslate",
    type: 'Projet personnel',
    summary: "Application de traduction automatique des discussions pour le jeu Crossout",
    thumbnail: '/assets/img/XoTranslate.png',
    images: ['/assets/img/XoTranslate.png'],
    technologies: ['Javascript', 'Electron'],
    github: 'https://github.com/vamp-xo/XoTranslate',
    sections: [
      {
        title: "Le projet",
        body: "XoTranslate traduit automatiquement les messages du chat de Crossout, un jeu dont la communauté est très internationale."
      },
      {
        title: "À quoi ça sert",
        body: "Suivre et participer aux discussions en jeu sans barrière de langue, sans avoir à copier-coller les messages dans un traducteur."
      },
      {
        title: "Côté technique",
        body: "Application de bureau Electron en JavaScript, qui lit le chat du jeu et affiche la traduction dans une fenêtre dédiée."
      }
    ]
  }
]

export const findProject = (slug) => projects.find(project => project.slug === slug)
