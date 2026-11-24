// src/i18n/en.js — English (default)
export default {
  meta: {
    home: {
      title: "Antoine Coclez — Full-stack developer",
      description: "Portfolio of Antoine Coclez, full-stack web developer from France: PHP, Laravel, Vue.js."
    },
    about: {
      title: "Antoine Coclez — About",
      description: "About Antoine Coclez, full-stack web developer from France: background, education, skills and contact."
    },
    projects: {
      title: "Antoine Coclez — Projects",
      description: "Personal and school projects by Antoine Coclez: desktop apps in Rust and Tauri, web apps in Laravel and Vue.js."
    },
    notFound: {
      title: "404 — Page not found",
      description: "This page does not exist."
    }
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    language: "Language",
    switchTo: { en: "Switch to English", fr: "Passer en français" }
  },
  // Only a French CV exists for now: point `href` to the English PDF once it is ready and drop "(in French)"
  cv: {
    href: "/assets/CV_Antoine_COCLEZ.pdf",
    short: "CV",
    view: "View my CV (in French)",
    download: "Download my CV (in French)"
  },
  hero: {
    intro: "I'm Antoine,",
    role: "Full-stack developer from France.",
    projects: "See my projects"
  },
  skills: {
    title: "Skills",
    description: "The skills I have and use regularly",
    cta: "More about me",
    groups: {
      backend: "Backend",
      frontend: "Frontend",
      tools: "Tools"
    }
  },
  projects: {
    eyebrow: "02 — Projects",
    title: "Projects",
    description: "Projects I have worked on",
    all: "See all projects",
    view: "View project",
    site: "Site",
    code: "Code",
    back: "All projects",
    technologies: "Technologies",
    visitSite: "Visit the site",
    viewCode: "View the code",
    types: {
      personal: "Personal project",
      school: "School project",
      professional: "Professional project"
    }
  },
  cta: {
    title: "Ready to trust me with your project?",
    text: "Drop me a line, or take a look at my code.",
    contact: "Contact me",
    subject: "Contact from your portfolio"
  },
  footer: {
    role: "Web Developer"
  },
  about: {
    eyebrow: "01 — About",
    title: "About me",
    description: "Want to know more about me? You're in the right place",
    intro: [
      "Hello, I'm Antoine Coclez, a 22-year-old developer. With three years of experience as a full-stack web developer, I'm motivated to work on dynamic and innovative web solutions.",
      "Browse my portfolio to get to know me better, and feel free to contact me to talk about working together."
    ],
    currently: {
      title: "Right now",
      items: [
        {
          title: "Desktop apps with Rust and Tauri",
          description: "Experimenting with lightweight native apps, with a Rust backend and a Svelte interface."
        },
        {
          title: "Automation with AI agents",
          description: "Setting up autonomous agents and automated workflows with OpenClaw and Claude Code."
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          title: "Bachelor's degree in Web Application Development",
          description: "French Bac+3 · Développeur d'applications web"
        },
        {
          title: "Two-year degree in IT services (BTS SIO)",
          description: "SLAM option: software solutions and business applications"
        },
        {
          title: "Vocational baccalaureate in Digital Systems (Bac Pro SN)",
          description: "RISC option: computer networks and communicating systems"
        }
      ]
    },
    social: {
      title: "Find me on",
      text: "Feel free to follow me to see my projects and my contributions to the web development world.",
      location: "France",
      languages: "French (native) · English (fluent)"
    }
  },
  notFound: {
    title: "Page not found",
    text: "Sorry, the page you are looking for does not exist or has been moved.",
    home: "Back to home",
    projects: "See my projects",
    popular: "Popular pages",
    pages: {
      home: "Back to the home page",
      projects: "Discover my work",
      about: "More about me"
    }
  },
  error: {
    title: "Oops! Something went wrong",
    text: "An unexpected error occurred. Don't worry, your data is safe.",
    reload: "Reload the page",
    home: "Back to home"
  }
}
