// src/data/projects.js
//
// One entry per project, newest first. Every text exists in English (`en`) and French (`fr`).
// The card uses `title`, `summary`, `thumbnail` and `technologies`;
// the detail page (/projects/<slug>) uses everything else.
//
// `type` is 'personal', 'school' or 'professional' (labels in src/i18n, projects.types).
// Screenshots live flat in public/assets/img/: <slug>.webp first (also the thumbnail), then <slug>-2.webp...
// `featured` projects are the ones shown on the home page.
//
// Components don't read this array directly: they call getProjects(locale) / findProject(slug, locale),
// which return the same entries with the texts of one language.
const SECTION = {
  project: { en: "The project", fr: "Le projet" },
  features: { en: "What it does", fr: "Ce qu'il fait" },
  purpose: { en: "What it's for", fr: "À quoi ça sert" },
  why: { en: "Why", fr: "Pourquoi" },
  technical: { en: "Under the hood", fr: "Côté technique" }
}

export const projects = [
  {
    slug: 'fishe',
    title: "Fishe",
    type: 'personal',
    summary: {
      en: "Real-time network traffic gauge for Windows and Linux, readable by AI agents",
      fr: "Jauge de trafic réseau en direct pour Windows et Linux, lisible par des agents IA"
    },
    thumbnail: '/assets/img/fishe.webp',
    images: ['/assets/img/fishe.webp', '/assets/img/fishe-2.webp', '/assets/img/fishe-3.webp', '/assets/img/fishe-4.webp', '/assets/img/fishe-5.webp', '/assets/img/fishe-6.webp', '/assets/img/fishe-7.webp'],
    technologies: ['Rust', 'Tauri', 'Svelte', 'TypeScript', 'SQLite', 'libpcap / Npcap'],
    featured: true,
    sections: [
      {
        title: SECTION.project,
        body: {
          en: "Fishe is a desktop app for Windows and Linux, free and open source (MIT), that I built for myself to see what is going through my network at any given moment. I pick a target: a remote machine, a specific program, or all of the PC's traffic. Fishe captures its packets (Npcap on Windows, libpcap on Linux), measures them live and shows them on a gauge, a chart and tables. It is a measuring instrument: it reads, and never interferes with the network.",
          fr: "Fishe est une application de bureau pour Windows et Linux, libre et gratuite (licence MIT), que j'ai faite pour moi, pour voir ce qui passe sur mon réseau à un instant donné. Je choisis une cible : une machine distante, un programme en particulier, ou tout le trafic du PC. Fishe capture ses paquets (Npcap sous Windows, libpcap sous Linux), les mesure en direct et les affiche sur une jauge, un graphique et des tableaux. C'est un instrument de mesure : il lit, il n'intervient jamais sur le réseau."
        }
      },
      {
        title: SECTION.features,
        body: {
          en: "The gauge shows the throughput and tells whether traffic is busier than usual: Fishe learns the target's normal level and rates the moment as Idle, Calm, Busy or Spike. It lists every program and every destination with its name, owner and country, and measures the quality of TCP connections (latency, jitter, retransmissions) without sending anything. It scans the local network, traces routes, and records replayable sessions, optionally with the packet headers in a pcapng file. A Security page points out what deserves a look, with the reason each time: unencrypted protocols, outdated TLS, ports open to the network, port scans, failing or unencrypted DNS, traffic leaving outside a VPN, a new device on the LAN or a second DHCP server. Finally, it embeds an MCP server: an AI agent such as Claude can read its measurements and start a monitoring session or a recording, depending on the access level I allow.",
          fr: "La jauge montre le débit et dit si le trafic est plus chargé que d'habitude : Fishe apprend le niveau normal de la cible et classe le moment en Repos, Calme, Chargé ou Pic. Il liste chaque programme et chaque destination avec son nom, son propriétaire et son pays, et mesure la qualité des connexions TCP (latence, gigue, retransmissions) sans rien envoyer. Il scanne le réseau local, trace les routes, et enregistre des sessions rejouables, avec si je le veux les en-têtes des paquets dans un fichier pcapng. Une page Sécurité signale ce qui mérite un coup d'œil, avec la raison à chaque fois : protocoles non chiffrés, TLS obsolète, ports ouverts au réseau, balayages de ports, DNS en échec ou en clair, trafic qui sort hors du VPN, nouvel appareil sur le réseau local ou second serveur DHCP. Enfin, il embarque un serveur MCP : un agent IA comme Claude peut lire ses mesures, démarrer une surveillance ou un enregistrement, selon le niveau d'accès que j'autorise."
        }
      },
      {
        title: SECTION.why,
        body: {
          en: "I wanted a quick answer to a simple question: what is using my connection right now, and is that normal? Existing tools show either raw packets or per-application totals, rarely both together with a sense of what is usual. I also wanted to be able to ask an agent that question instead of watching a screen. Later, I wanted the same view to answer a second question: is any of this unsafe?",
          fr: "Je voulais répondre vite à une question simple : qu'est-ce qui consomme ma connexion en ce moment, et est-ce normal ? Les outils existants montrent soit des paquets bruts, soit des totaux par application, rarement les deux avec une idée de ce qui est habituel. Je voulais aussi pouvoir poser cette question à un agent plutôt que de regarder un écran. Ensuite, j'ai voulu que la même vue réponde à une deuxième question : est-ce que quelque chose là-dedans pose un problème de sécurité ?"
        }
      },
      {
        title: SECTION.technical,
        body: {
          en: "A Tauri 2 application: a Rust workspace of two crates, a core that does not depend on Tauri and the app that puts it in a window, plus a Svelte 5 interface in TypeScript whose IPC types are generated from the Rust code. Each network interface has its own capture thread; an aggregator merges their counters every 250 ms, runs the load detector and pushes a sample to the interface. In program mode, each packet is attributed to its process through the socket table (read from /proc on Linux), or exactly through ETW when the app runs as administrator on Windows; destination names come from the traffic itself (TLS SNI, DNS responses, reverse DNS), and recordings go into SQLite. For Linux I replaced the Windows network APIs with rtnetlink and raw ICMP sockets; CI builds and tests that version, but so far I have only run it in Docker, not on a real Linux desktop. The security checks read packet headers only: the session collects a bounded set of facts, and each finding is a pure rule over them, so each one is unit-tested. The part I would bring up in an interview: the built-in MCP server (rmcp, local HTTP, token, three access levels) shares the same service layer as the interface, so an agent and a click do exactly the same thing, and the window follows whatever the agent triggers.",
          fr: "Application Tauri 2 : un workspace Rust en deux crates, un cœur qui ne dépend pas de Tauri et l'application qui l'habille d'une fenêtre, plus une interface Svelte 5 en TypeScript dont les types d'IPC sont générés depuis le Rust. Chaque interface réseau a son thread de capture ; un agrégateur fusionne leurs compteurs toutes les 250 ms, fait tourner le détecteur de charge et pousse un échantillon à l'interface. En mode programme, chaque paquet est attribué à son processus via la table des sockets (lue dans /proc sous Linux), ou exactement via ETW quand l'app est lancée en administrateur sous Windows ; les noms de destinations viennent du trafic lui-même (SNI TLS, réponses DNS, reverse DNS) et les enregistrements vont dans SQLite. Pour Linux, j'ai remplacé les API réseau de Windows par rtnetlink et des sockets ICMP brutes ; la CI compile et teste cette version, mais je ne l'ai encore fait tourner que dans Docker, pas sur un vrai bureau Linux. Les contrôles de sécurité ne lisent que les en-têtes des paquets : la session accumule un ensemble borné de faits, et chaque constat est une règle pure appliquée à ces faits, donc testée unitairement. Le point dont je parlerais en entretien : le serveur MCP intégré (rmcp, HTTP local, jeton, trois niveaux d'accès) partage la même couche de services que l'interface, donc un agent et un clic font exactement la même chose, et la fenêtre suit ce que l'agent déclenche."
        }
      }
    ]
  },
  {
    slug: 'doppler',
    title: "Doppler",
    type: 'personal',
    summary: {
      en: "Desktop app for Crossout: battle archive, statistics and build tools",
      fr: "Application de bureau pour Crossout : archive des parties, statistiques et builds"
    },
    thumbnail: '/assets/img/doppler.webp',
    images: ['/assets/img/doppler.webp', '/assets/img/doppler-2.webp', '/assets/img/doppler-3.webp', '/assets/img/doppler-4.webp', '/assets/img/doppler-5.webp', '/assets/img/doppler-6.webp', '/assets/img/doppler-7.webp'],
    technologies: ['Rust', 'Tauri', 'Svelte', 'TypeScript', 'SQLite', 'Tailwind'],
    featured: true,
    sections: [
      {
        title: SECTION.project,
        body: {
          en: "Doppler is a Windows desktop app for Crossout players. It reads the log files the game writes to the PC: it never writes to them and never touches the game process, and at most starts the game through the player's launcher with the combat log switched on. I develop it on my own, as a personal project.",
          fr: "Doppler est une application de bureau Windows pour les joueurs de Crossout. Elle lit les fichiers de log que le jeu écrit sur le PC : elle n'écrit jamais dedans et ne touche pas au processus du jeu ; tout au plus, elle lance le jeu via le launcher du joueur, avec le combat log activé. Je la développe seul, en projet personnel."
        }
      },
      {
        title: SECTION.features,
        body: {
          en: "During a battle, Doppler shows the players, their damage and the kill feed live, and a small window over the game recaps the last battle player by player. Every battle is archived per Crossout account, then analysed by battle type: statistics per weapon, opponent and map, damage by kind and to important parts, progress week by week, and what each battle earned in resources. A translator shows the translated chat in a window on top of the game. A build simulator and a parts guide, still in beta, use the game's own values and formulas, and say which points the game's files don't settle yet. Doppler can also start the game with the combat log on, export its tables as CSV and update itself.",
          fr: "Pendant une partie, Doppler affiche en direct les joueurs, leurs dégâts et le fil des destructions, et une petite fenêtre par-dessus le jeu récapitule la dernière partie, joueur par joueur. Chaque partie est archivée par compte Crossout, puis analysée par type de bataille : statistiques par arme, par adversaire et par carte, dégâts par type et sur les pièces importantes, progression semaine par semaine, et ce que chaque partie a rapporté en ressources. Un traducteur affiche le chat traduit dans une fenêtre par-dessus le jeu. Un simulateur de builds et un guide des pièces, encore en bêta, reprennent les valeurs et les formules du jeu, et signalent ce que ses fichiers ne permettent pas encore de confirmer. Doppler peut aussi lancer le jeu avec le combat log activé, exporter ses tableaux en CSV et se mettre à jour tout seul."
        }
      },
      {
        title: SECTION.why,
        body: {
          en: "The game only keeps its last ten log sessions and offers neither history nor detailed statistics. Doppler keeps battles over the long run and makes them readable. The garage shows only part of a build's figures; the simulator and the guide work out the rest with the game's own rules. Crossout's community is very international, hence the built-in translator.",
          fr: "Le jeu ne garde que ses dix dernières sessions de logs et n'offre ni historique ni statistiques détaillées. Doppler conserve les parties dans la durée et les rend lisibles. Le garage n'affiche qu'une partie des caractéristiques d'un build ; le simulateur et le guide calculent le reste avec les règles du jeu. La communauté de Crossout est très internationale, d'où le traducteur intégré."
        }
      },
      {
        title: SECTION.technical,
        body: {
          en: "A Tauri 2 application: a Rust backend watches the log folder every 350 ms and pushes changes to a SvelteKit interface (Svelte 5, TypeScript) through events. Each feature is an independent module; those that store data have their own SQLite database, in WAL mode, with statistics read on a separate connection so they never wait on a battle being written. Battles are stored as JSON compressed with zstd and a dictionary built from real battles. For statistics, I keep a copy of each battle in plain columns in dedicated tables: SQLite does the filtering and summing itself, in a fraction of a second across hundreds of thousands of battles. The game's data (names, part figures, upgrades) is imported from its own files by a Python script after each game update, and the simulator works out speed, acceleration curves, weapon spread and overheating from it. The interface's types are generated from the Rust structs, so a field changed on one side breaks type checking on the other.",
          fr: "Application Tauri 2 : un backend Rust surveille le dossier de logs toutes les 350 ms et pousse les changements à une interface SvelteKit (Svelte 5, TypeScript) par événements. Chaque fonctionnalité est un module indépendant ; celles qui stockent des données ont leur propre base SQLite, en mode WAL, et les statistiques passent par une connexion à part pour ne jamais attendre l'écriture d'une partie. Les parties sont stockées en JSON compressé avec zstd et un dictionnaire construit à partir de vraies parties. Pour les statistiques, je garde une copie en colonnes simples de chaque partie dans des tables dédiées : SQLite filtre et additionne elle-même, en une fraction de seconde sur des centaines de milliers de parties. Les données du jeu (noms, caractéristiques des pièces, améliorations) sont importées depuis ses propres fichiers par un script Python à chaque mise à jour du jeu, et le simulateur en tire la vitesse, les courbes d'accélération, la dispersion des armes et la surchauffe. Les types de l'interface sont générés depuis les structures Rust, donc un champ modifié d'un côté casse la vérification de l'autre."
        }
      }
    ]
  },
  {
    slug: 'agri-plus',
    title: "Agri+",
    type: 'school',
    summary: {
      en: "Comprehensive management tool for farmers",
      fr: "Outil de gestion poussé pour les agriculteurs"
    },
    thumbnail: '/assets/img/AGRIPLUS.png',
    images: ['/assets/img/AGRIPLUS.png'],
    technologies: ['Laravel', 'Vue', 'MySQL', 'Ionic'],
    sections: [
      {
        title: SECTION.project,
        body: {
          en: "Agri+ is a management tool for farmers: it brings the day-to-day running of the farm together in one application, available on desktop and on mobile.",
          fr: "Agri+ est un outil de gestion destiné aux agriculteurs : il centralise le suivi de l'exploitation au quotidien dans une application accessible sur ordinateur comme sur mobile."
        }
      },
      {
        title: SECTION.purpose,
        body: {
          en: "Replacing scattered notebooks and spreadsheets with a single tool, designed to be used quickly, in the field, without training.",
          fr: "Remplacer les carnets et tableurs éparpillés par un seul outil, pensé pour être utilisé rapidement, sur le terrain, sans formation."
        }
      },
      {
        title: SECTION.technical,
        body: {
          en: "A Laravel API backed by a MySQL database, consumed by a Vue interface and shipped as a mobile app with Ionic.",
          fr: "Une API Laravel adossée à une base MySQL, consommée par une interface Vue et déclinée en application mobile avec Ionic."
        }
      }
    ]
  },
  {
    slug: 'vlib',
    title: "VLIB",
    type: 'school',
    summary: {
      en: "Mobile fleet management app for a bike-sharing company",
      fr: "Application mobile de gestion de parc pour une entreprise de vélos en libre-service"
    },
    thumbnail: '/assets/img/VLIB.png',
    images: ['/assets/img/VLIB.png'],
    technologies: ['Android Studio', 'Java', 'PHP', 'MySQL'],
    github: 'https://github.com/acoclez/VLIB',
    sections: [
      {
        title: SECTION.project,
        body: {
          en: "An Android app built for VLIB, a bike-sharing company, to manage its fleet: stations, docks, bikes and their condition.",
          fr: "Application Android développée pour VLIB, une entreprise de vélos en libre-service, afin de gérer son parc : stations, plots, vélos et leur état."
        }
      },
      {
        title: SECTION.purpose,
        body: {
          en: "Letting technicians look up a station, see which docks are occupied, check each bike's condition and history, and update that information directly in the field.",
          fr: "Permettre aux techniciens de consulter une station, voir quels plots sont occupés, l'état de chaque vélo et son historique, et de mettre à jour ces informations directement sur le terrain."
        }
      },
      {
        title: SECTION.technical,
        body: {
          en: "A native Java app built with Android Studio, talking to a PHP API and a MySQL database hosted on a server.",
          fr: "Application native en Java sous Android Studio, qui communique avec une API PHP et une base MySQL hébergées côté serveur."
        }
      }
    ]
  },
  {
    slug: 'm2l',
    title: "M2L",
    type: 'school',
    summary: {
      en: "Website for the Maison des Ligues de Lorraine",
      fr: "Site de la Maison des Ligues de Lorraine"
    },
    thumbnail: '/assets/img/M2L.webp',
    images: ['/assets/img/M2L.webp'],
    technologies: ['PHP', 'MySQL'],
    github: 'https://github.com/acoclez/AP-2.5-M2L',
    sections: [
      {
        title: SECTION.project,
        body: {
          en: "Website for the Maison des Ligues de Lorraine (M2L), the organisation that hosts and supports the region's sports leagues.",
          fr: "Site web de la Maison des Ligues de Lorraine (M2L), la structure qui héberge et accompagne les ligues sportives régionales."
        }
      },
      {
        title: SECTION.purpose,
        body: {
          en: "Presenting the M2L, its leagues and its services, and offering a single entry point for practical information and news.",
          fr: "Présenter la M2L, ses ligues et ses services, et offrir un point d'entrée unique pour les informations pratiques et l'actualité."
        }
      },
      {
        title: SECTION.technical,
        body: {
          en: "A site built in PHP with a MySQL database and no framework, to master the whole chain from routing to rendering.",
          fr: "Site développé en PHP avec une base MySQL, sans framework, pour maîtriser toute la chaîne du routage à l'affichage."
        }
      }
    ]
  },
  {
    slug: 'portfolio',
    title: "Portfolio",
    type: 'personal',
    summary: {
      en: "This site: my portfolio, presenting my profile and my projects",
      fr: "Ce site : mon portfolio pour présenter mon profil et mes projets"
    },
    thumbnail: '/assets/img/portfolio.png',
    images: ['/assets/img/portfolio.png'],
    technologies: ['Vue', 'Tailwind', 'GSAP'],
    github: 'https://github.com/acoclez/portfolio',
    demo: '/',
    sections: [
      {
        title: SECTION.project,
        body: {
          en: "The site you are on. A Vue 3 application built with Vite, styled with Tailwind CSS and animated with GSAP.",
          fr: "Le site sur lequel vous êtes. Une application Vue 3 construite avec Vite, stylée avec Tailwind CSS et animée avec GSAP."
        }
      },
      {
        title: SECTION.purpose,
        body: {
          en: "Showing who I am, what I can do and what I have worked on, with a visual identity of my own rather than a template.",
          fr: "Présenter qui je suis, ce que je sais faire et sur quoi j'ai travaillé, avec une identité visuelle qui me ressemble plutôt qu'un template."
        }
      },
      {
        title: SECTION.technical,
        body: {
          en: "A fully static site hosted on Cloudflare. Entrance and scroll animations are centralised in a GSAP composable reused by every page.",
          fr: "Site entièrement statique, hébergé sur Cloudflare. Les animations d'entrée et au défilement sont centralisées dans un composable GSAP réutilisé par toutes les pages."
        }
      }
    ]
  },
  {
    slug: 'xodrip',
    title: "XoDrip",
    type: 'personal',
    summary: {
      en: "Profile customisation preview tool for the game Crossout",
      fr: "Outil de prévisualisation de la customisation de profil pour le jeu Crossout"
    },
    thumbnail: '/assets/img/xodrip.webp',
    images: ['/assets/img/xodrip.webp'],
    technologies: ['Svelte', 'Tailwind'],
    github: 'https://github.com/acoclez/XoDrip',
    demo: 'https://xodrip.netlify.app',
    sections: [
      {
        title: SECTION.project,
        body: {
          en: "XoDrip lets Crossout players preview their profile customisation before spending anything in the game.",
          fr: "XoDrip permet aux joueurs de Crossout de prévisualiser la customisation de leur profil avant de dépenser quoi que ce soit en jeu."
        }
      },
      {
        title: SECTION.purpose,
        body: {
          en: "The game does not let you try combinations: XoDrip reproduces the rendering so you can test the options and share the result.",
          fr: "Le jeu ne permet pas d'essayer les combinaisons : XoDrip reproduit le rendu pour tester les options et partager le résultat."
        }
      },
      {
        title: SECTION.technical,
        body: {
          en: "A Svelte application styled with Tailwind and deployed on Netlify. Everything happens in the browser, with no backend.",
          fr: "Application Svelte stylée avec Tailwind, déployée sur Netlify. Tout se passe dans le navigateur, sans backend."
        }
      }
    ]
  },
  {
    slug: 'xotranslate',
    title: "XoTranslate",
    type: 'personal',
    summary: {
      en: "Automatic chat translation app for the game Crossout",
      fr: "Application de traduction automatique des discussions pour le jeu Crossout"
    },
    thumbnail: '/assets/img/XoTranslate.png',
    images: ['/assets/img/XoTranslate.png'],
    technologies: ['Javascript', 'Electron'],
    github: 'https://github.com/vamp-xo/XoTranslate',
    sections: [
      {
        title: SECTION.project,
        body: {
          en: "XoTranslate automatically translates the chat messages of Crossout, a game with a very international community.",
          fr: "XoTranslate traduit automatiquement les messages du chat de Crossout, un jeu dont la communauté est très internationale."
        }
      },
      {
        title: SECTION.purpose,
        body: {
          en: "Following and joining in-game conversations without a language barrier, and without copy-pasting messages into a translator.",
          fr: "Suivre et participer aux discussions en jeu sans barrière de langue, sans avoir à copier-coller les messages dans un traducteur."
        }
      },
      {
        title: SECTION.technical,
        body: {
          en: "An Electron desktop app in JavaScript that reads the game's chat and shows the translation in a dedicated window.",
          fr: "Application de bureau Electron en JavaScript, qui lit le chat du jeu et affiche la traduction dans une fenêtre dédiée."
        }
      }
    ]
  }
]

// Same entry with the texts of one language: summary, section titles and bodies become plain strings
const localize = (project, locale) => ({
  ...project,
  summary: project.summary[locale] ?? project.summary.en,
  sections: project.sections.map(section => ({
    title: section.title[locale] ?? section.title.en,
    body: section.body[locale] ?? section.body.en
  }))
})

export const getProjects = (locale) => projects.map(project => localize(project, locale))

export const findProject = (slug, locale) => {
  const project = projects.find(candidate => candidate.slug === slug)

  return project ? localize(project, locale) : undefined
}
