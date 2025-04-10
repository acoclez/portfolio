<!-- src/views/VeilleView.vue -->
<template>
  <div class="min-h-screen bg-black text-white relative">
    <!-- Background Grid - fixed position -->
    <div class="fixed inset-0 z-0 dot-grid opacity-20 pointer-events-none"></div>

    <!-- Hero Section -->
    <section ref="heroSection" class="py-24 px-4 text-center relative">
      <div class="max-w-4xl mx-auto">
        <!-- L top left -->
        <div class="absolute top-0 left-0 l-decoration"></div>

        <!-- L bottom right reversed -->
        <div class="absolute bottom-0 right-0 l-decoration-reversed"></div>

        <h1 ref="pageTitle" class="text-4xl md:text-5xl font-bold mb-4 transform translate-y-10 opacity-0">Veille</h1>
        <p ref="pageDesc" class="text-xl text-gray-400 max-w-2xl mx-auto transform translate-y-10 opacity-0">
          Là où je partage mes connaissances sur mon sujet de veille, Spring.
        </p>
        <div class="section-title-bar mx-auto"></div>
      </div>
    </section>

    <!-- RSS Feeds Section -->
    <section ref="feedsSection" class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Spring Blog Feed -->
        <div ref="feedCard1" class="transform translate-y-20 opacity-0">
          <div class="bg-gray-900 rounded-none overflow-hidden shadow-xl p-6 border-t-4 border-yellow-400 relative">
            <!-- L top right decoration -->
            <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>
            
            <h2 class="text-2xl font-bold mb-6 flex items-center">
              <Icon icon="mdi:leaf" class="mr-2 text-yellow-400" width="24" />
              Spring Blog
            </h2>

            <div v-if="isLoading.blog" class="flex justify-center py-8">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
            </div>

            <div v-else-if="error.blog" class="p-4 bg-red-900 bg-opacity-30 text-red-300 rounded-lg">
              {{ error.blog }}
            </div>

            <div v-else class="space-y-4">
              <div v-for="(item, index) in feeds.blog" :key="index"
                class="bg-gray-800 rounded-none overflow-hidden hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                <a :href="item.link" target="_blank" class="block p-4">
                  <h3 class="text-lg font-medium mb-2">{{ item.title }}</h3>
                  <div class="flex items-center text-sm text-gray-400 mb-3">
                    <span v-if="item.date" class="mr-3">{{ formatDate(item.date) }}</span>
                    <span v-if="item.author">Par {{ item.author }}</span>
                  </div>
                  <p v-if="item.description" class="text-gray-400 text-sm line-clamp-3">
                    {{ item.description }}
                  </p>
                </a>
              </div>
            </div>

            <a href="https://feeder.co/discover/3bf86e440d/spring-io-blog" target="_blank" 
              class="inline-block mt-6 text-gray-400 hover:text-yellow-400 transition">
              Voir sur Feeder →
            </a>
          </div>
        </div>
        
        <!-- Spring Engineering Feed -->
        <div ref="feedCard2" class="transform translate-y-20 opacity-0">
          <div class="bg-gray-900 rounded-none overflow-hidden shadow-xl p-6 border-t-4 border-yellow-400 relative">
            <!-- L top right decoration -->
            <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>
            
            <h2 class="text-2xl font-bold mb-6 flex items-center">
              <Icon icon="mdi:code-braces" class="mr-2 text-yellow-400" width="24" />
              Spring Engineering
            </h2>

            <div v-if="isLoading.engineering" class="flex justify-center py-8">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
            </div>

            <div v-else-if="error.engineering" class="p-4 bg-red-900 bg-opacity-30 text-red-300 rounded-lg">
              {{ error.engineering }}
            </div>

            <div v-else class="space-y-4">
              <div v-for="(item, index) in feeds.engineering" :key="index"
                class="bg-gray-800 rounded-none overflow-hidden hover:bg-gray-700 transition border-l-2 border-transparent hover:border-yellow-400">
                <a :href="item.link" target="_blank" class="block p-4">
                  <h3 class="text-lg font-medium mb-2">{{ item.title }}</h3>
                  <div class="flex items-center text-sm text-gray-400 mb-3">
                    <span v-if="item.date" class="mr-3">{{ formatDate(item.date) }}</span>
                    <span v-if="item.author">Par {{ item.author }}</span>
                  </div>
                  <p v-if="item.description" class="text-gray-400 text-sm line-clamp-3">
                    {{ item.description }}
                  </p>
                </a>
              </div>
            </div>

            <a href="https://feeder.co/discover/0856437d81/spring-io-blog-category-engineering" target="_blank" 
              class="inline-block mt-6 text-gray-400 hover:text-yellow-400 transition">
              Voir sur Feeder →
            </a>
          </div>
        </div>
      </div>
      
      <!-- Spring Framework Overview -->
      <div ref="springOverview" class="mt-16 transform translate-y-20 opacity-0">
        <div class="bg-gray-900 rounded-none overflow-hidden shadow-2xl p-8 border-l-4 border-yellow-400 relative">
          <!-- L top left -->
          <div class="absolute top-0 left-0 l-decoration-small"></div>

          <!-- L bottom right reversed -->
          <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>
          
          <h2 class="text-3xl font-bold mb-6">Ma veille technologique sur Spring</h2>

          <div class="prose prose-invert max-w-none">
            <p class="mb-4">
              Spring est un framework Java open source qui simplifie le développement d'applications d'entreprise.
              Depuis sa première version en 2002, Spring est devenu l'un des frameworks les plus populaires
              pour le développement Java.
            </p>

            <h3 class="text-xl font-bold mt-8 mb-4">Pourquoi j'ai choisi Spring pour ma veille</h3>

            <p class="mb-4">
              J'ai choisi de réaliser ma veille technologique sur Spring car c'est un écosystème complet qui évolue
              constamment et qui est largement utilisé dans l'industrie. Sa popularité et sa robustesse en font
              un atout majeur pour un développeur Java.
            </p>

            <h3 class="text-xl font-bold mt-8 mb-4">Les principales composantes de Spring</h3>

            <ul class="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Spring Core</strong> : Le conteneur d'inversion de contrôle (IoC) qui est à la base du framework
              </li>
              <li><strong>Spring MVC</strong> : Un modèle MVC pour le développement web</li>
              <li><strong>Spring Boot</strong> : Facilite la création d'applications Spring autonomes et prêtes à la
                production</li>
              <li><strong>Spring Data</strong> : Simplifie l'accès aux données et l'interaction avec les bases de données
              </li>
              <li><strong>Spring Security</strong> : Fournit une sécurité robuste et configurable pour les applications
              </li>
              <li><strong>Spring Cloud</strong> : Facilite le développement d'applications distribuées dans le cloud</li>
            </ul>

            <h3 class="text-xl font-bold mt-8 mb-4">Dernières tendances et évolutions</h3>

            <p class="mb-4">
              Spring continue d'évoluer pour répondre aux besoins des développeurs modernes. Voici quelques tendances
              récentes :
            </p>

            <ul class="list-disc pl-6 space-y-2">
              <li>Support amélioré pour les applications réactives</li>
              <li>Intégration renforcée avec Kubernetes et les environnements cloud-native</li>
              <li>Amélioration des performances et réduction de l'empreinte mémoire</li>
              <li>Support pour GraalVM et la compilation native</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Call To Action -->
    <CallToActionSection />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'VeilleView',
  components: {
    Icon,
    CallToActionSection
  },
  data() {
    return {
      feeds: {
        blog: [],
        engineering: []
      },
      isLoading: {
        blog: true,
        engineering: true
      },
      error: {
        blog: null,
        engineering: null
      }
    }
  },
  mounted() {
    // Hero animations
    gsap.to(this.$refs.pageTitle, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2
    });

    gsap.to(this.$refs.pageDesc, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.4
    });

    // Feed cards animations
    gsap.to(this.$refs.feedCard1, {
      scrollTrigger: {
        trigger: this.$refs.feedsSection,
        start: "top 80%"
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2
    });

    gsap.to(this.$refs.feedCard2, {
      scrollTrigger: {
        trigger: this.$refs.feedsSection,
        start: "top 80%"
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.4
    });

    // Spring overview animation
    gsap.to(this.$refs.springOverview, {
      scrollTrigger: {
        trigger: this.$refs.springOverview,
        start: "top 80%"
      },
      opacity: 1,
      y: 0,
      duration: 0.8
    });

    // Animate feed items when they appear
    gsap.from('.bg-gray-800', {
      scrollTrigger: {
        trigger: this.$refs.feedsSection,
        start: "top 60%"
      },
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      delay: 1.0
    });

    // Fetch RSS feeds
    this.fetchRSSFeed('https://spring.io/blog.atom', 'blog');
    this.fetchRSSFeed('https://spring.io/blog/category/engineering.atom', 'engineering');
  },
  methods: {
    formatDate(dateString) {
      try {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(date);
      } catch (e) {
        return dateString;
      }
    },
    // Dans un environnement réel, vous devriez utiliser un proxy côté serveur
    // pour récupérer les flux RSS à cause des restrictions CORS
    async fetchRSSFeed(url, feedType) {
      this.isLoading[feedType] = true;
      this.error[feedType] = null;

      try {
        // Note: Ceci ne fonctionnera pas directement en raison des restrictions CORS
        // Il faut utiliser un proxy côté serveur ou une fonction serverless
        // Simulation pour l'exemple :
        
        // Dans un cas réel, vous feriez quelque chose comme :
        // const response = await fetch(`/api/rss-proxy?url=${encodeURIComponent(url)}`);
        // const data = await response.json();
        
        // Simulons des données pour l'exemple
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Données simulées
        const mockItems = [
          {
            title: 'Spring Framework 6.0 goes GA',
            link: 'https://spring.io/blog/2022/11/16/spring-framework-6-0-goes-ga',
            date: '2022-11-16T10:00:00Z',
            author: 'Juergen Hoeller',
            description: 'We are pleased to announce that Spring Framework 6.0 is generally available from repo.spring.io and Maven Central.'
          },
          {
            title: 'Spring Boot 3.0 is now GA',
            link: 'https://spring.io/blog/2022/11/24/spring-boot-3-0-is-now-ga',
            date: '2022-11-24T12:00:00Z',
            author: 'Spring Team',
            description: 'Spring Boot 3.0 is now generally available from repo.spring.io and Maven Central! This release brings a host of new features and improvements.'
          },
          {
            title: 'Upgrading to Spring Boot 3.0',
            link: 'https://spring.io/blog/2022/12/15/upgrading-to-spring-boot-3-0',
            date: '2022-12-15T14:30:00Z',
            author: 'Phil Webb',
            description: 'In this blog post we will look at how to upgrade an existing application to Spring Boot 3.0.'
          },
          {
            title: 'Spring Modulith 1.0 RC1 released',
            link: 'https://spring.io/blog/2023/01/10/spring-modulith-1-0-rc1-released',
            date: '2023-01-10T09:15:00Z',
            author: 'Oliver Drotbohm',
            description: 'We are happy to announce the first release candidate of Spring Modulith 1.0.'
          }
        ];
        
        this.feeds[feedType] = mockItems;
      } catch (error) {
        this.error[feedType] = 'Erreur lors du chargement des articles. Veuillez réessayer ultérieurement.';
        console.error(`Erreur de chargement du flux ${feedType}:`, error);
      } finally {
        this.isLoading[feedType] = false;
      }
    }
  }
}
</script>

<style scoped>
/* Import home styles for reusing definitions */
@import '@/assets/css/home-styles.css';

/* Line clamp for descriptions */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animation for the Spring overview container */
.border-l-4.border-yellow-400 {
  animation: borderPulse 4s infinite;
}

.border-t-4.border-yellow-400 {
  animation: borderPulse 4s infinite;
}

@keyframes borderPulse {
  0% {
    border-color: #F7DE3D;
  }
  50% {
    border-color: #FDE68A;
  }
  100% {
    border-color: #F7DE3D;
  }
}

/* L decoration for top right */
.l-decoration-small-reversed.top-right::before {
  right: 0;
  top: 0;
}

.l-decoration-small-reversed.top-right::after {
  right: 0;
  top: 0;
}

/* Styling for the prose content */
.prose :deep(h3) {
  color: #F7DE3D;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.prose :deep(strong) {
  color: #fff;
}

.prose :deep(ul) {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.prose :deep(li) {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

/* Feed item hover effects */
.bg-gray-800:hover {
  transform: translateX(5px);
}
</style>