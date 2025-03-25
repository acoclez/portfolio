<template>
    <section class="py-20 md:py-32 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Antoine Coclez</h1>
        <p class="text-xl md:text-2xl text-text-secondary mb-8">Développeur Informatique</p>
        
        <!-- Social links -->
        <div class="flex justify-center gap-4 mb-12">
          <a 
            v-for="social in socials" 
            :key="social.name"
            :href="social.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-background-light p-3 rounded-full hover:bg-primary/10 transition-standard"
            :aria-label="social.name"
          >
            <img 
              :src="social.icon" 
              :alt="`${social.name} Icon`" 
              class="w-6 h-6"
            />
          </a>
        </div>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/projects" 
            class="btn btn-primary inline-flex items-center justify-center gap-2"
          >
            <span>Voir mes projets</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </router-link>
          <a 
            href="/assets/cv.pdf" 
            target="_blank"
            class="btn bg-background-light text-text-primary hover:bg-background-light/80 inline-flex items-center justify-center gap-2"
          >
            <span>Télécharger mon CV</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    data() {
      return {
        socials: [
          { 
            name: 'GitHub', 
            url: 'https://github.com/', 
            icon: '/assets/img/socials/github.svg' 
          },
          { 
            name: 'GitLab', 
            url: 'https://gitlab.com/', 
            icon: '/assets/img/socials/gitlab.svg' 
          },
          { 
            name: 'Twitter', 
            url: 'https://x.com/', 
            icon: '/assets/img/socials/twitter.svg' 
          }
        ]
      }
    }
  }
  </script>