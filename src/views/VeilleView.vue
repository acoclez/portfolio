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
      </div>
    </section>

    <!-- Detailed Articles Section -->
    <section ref="articlesSection" class="max-w-6xl mx-auto px-4 py-16">
      <div ref="articlesTitle" class="text-center mb-16 transform translate-y-20 opacity-0">
        <h2 class="text-3xl font-bold mb-6">Mes analyses approfondies</h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Découvrez mes réflexions sur les dernières évolutions de l'écosystème Spring
        </p>
        <div class="section-title-bar mx-auto"></div>
      </div>

      <div class="space-y-12">
        <!-- Article 1: Spring AI (December 2024) - Most Recent -->
        <article ref="article1" class="transform translate-y-20 opacity-0">
          <div class="bg-gray-900 rounded-none overflow-hidden shadow-xl border-l-4 border-yellow-400 relative">
            <!-- L top right decoration -->
            <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>
            
            <div class="p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <Icon icon="mdi:rocket-launch" class="text-yellow-400 mr-3" width="28" />
                  <span class="text-sm text-gray-400 bg-gray-800 px-3 py-1">Innovation</span>
                </div>
                <span class="text-sm text-gray-500 font-medium">Décembre 2024</span>
              </div>
              
              <h3 class="text-2xl font-bold mb-6">Spring AI 1.0 M5 : L'intelligence artificielle native arrive</h3>
              
              <div class="prose prose-invert max-w-none text-gray-300">
                <p class="mb-4">
                  <strong>Spring AI 1.0 M5</strong>, sorti en décembre 2024, marque la dernière étape avant la GA 
                  prévue en 2025. Cette révolution intègre l'IA nativement dans l'écosystème Spring.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">ChatClient : L'API unifiée</h4>
                <p class="mb-3">
                  Le <code class="bg-gray-800 px-2 py-1 text-yellow-400">ChatClient</code> offre une interface fluide 
                  pour 20+ modèles IA (OpenAI, Anthropic, Bedrock). Le switch entre providers devient transparent 
                  avec la même API Spring familière que <strong>WebClient</strong> ou <strong>RestClient</strong>.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">RAG et Vector Stores</h4>
                <p class="mb-3">
                  Spring AI inclut nativement le <strong>Retrieval Augmented Generation</strong> avec support 
                  pour PostgreSQL/PGVector, Pinecone, MongoDB Atlas, Redis. La création d'assistants IA métier 
                  se fait en quelques annotations Spring Boot avec l'<strong>@Advisor</strong> pattern.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">Model Context Protocol incubating</h4>
                <p>
                  M5 introduit le support expérimental du <strong>Model Context Protocol (MCP)</strong>, 
                  permettant l'intégration standardisée d'outils externes. C'est un game-changer pour 
                  les applications entreprise nécessitant des interactions complexes avec des systèmes legacy.
                </p>
              </div>
              
              <div class="mt-8">
                <a href="https://spring.io/blog/2024/12/23/spring-ai-1-0-0-m5-released" target="_blank" 
                  class="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition font-medium">
                  <Icon icon="mdi:external-link" class="mr-2" width="16" />
                  Découvrir Spring AI 1.0 M5
                </a>
              </div>
            </div>
          </div>
        </article>

        <!-- Article 2: Spring Security (November 2024) -->
        <article ref="article2" class="transform translate-y-20 opacity-0">
          <div class="bg-gray-900 rounded-none overflow-hidden shadow-xl border-l-4 border-yellow-400 relative">
            <!-- L top right decoration -->
            <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>
            
            <div class="p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <Icon icon="mdi:shield-check" class="text-yellow-400 mr-3" width="28" />
                  <span class="text-sm text-gray-400 bg-gray-800 px-3 py-1">Sécurité</span>
                </div>
                <span class="text-sm text-gray-500 font-medium">Novembre 2024</span>
              </div>
              
              <h3 class="text-2xl font-bold mb-6">Spring Security 6.4 et l'authentification du futur</h3>
              
              <div class="prose prose-invert max-w-none text-gray-300">
                <p class="mb-4">
                  <strong>Spring Security 6.4</strong>, sorti en novembre 2024, introduit les <strong>Passkeys</strong> 
                  et les <strong>One-Time Tokens</strong>, marquant l'évolution vers l'authentification moderne sans mot de passe.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">L'ère des Passkeys</h4>
                <p class="mb-3">
                  Les Passkeys (WebAuthn) utilisent la biométrie et la cryptographie pour éliminer les mots de passe. 
                  Spring Security 6.4 simplifie drastiquement leur implémentation avec l'annotation 
                  <code class="bg-gray-800 px-2 py-1 text-yellow-400">@EnableWebSecurity</code> et une configuration auto-générée.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">One-Time Tokens natifs</h4>
                <p class="mb-3">
                  La nouvelle classe <code class="bg-gray-800 px-2 py-1 text-yellow-400">OneTimeTokenService</code> 
                  gère automatiquement les tokens temporaires pour la réinitialisation de mots de passe et la vérification email. 
                  Plus besoin d'implémenter cette logique manuellement.
                </p>
                
                <p>
                  Ces innovations positionnent Spring Security à l'avant-garde de la sécurité moderne, 
                  anticipant l'abandon progressif des mots de passe traditionnels d'ici 2026.
                </p>
              </div>
              
              <div class="mt-8">
                <a href="https://spring.io/blog/2024/11/21/spring-security-6-4-0-available-now" target="_blank" 
                  class="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition font-medium">
                  <Icon icon="mdi:external-link" class="mr-2" width="16" />
                  Lire l'annonce officielle
                </a>
              </div>
            </div>
          </div>
        </article>

        <!-- Article 3: TestContainers (November 2024) -->
        <article ref="article3" class="transform translate-y-20 opacity-0">
          <div class="bg-gray-900 rounded-none overflow-hidden shadow-xl border-l-4 border-yellow-400 relative">
            <!-- L top right decoration -->
            <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>
            
            <div class="p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <Icon icon="mdi:lightbulb" class="text-yellow-400 mr-3" width="28" />
                  <span class="text-sm text-gray-400 bg-gray-800 px-3 py-1">Bonnes pratiques</span>
                </div>
                <span class="text-sm text-gray-500 font-medium">Novembre 2024</span>
              </div>
              
              <h3 class="text-2xl font-bold mb-6">Spring Boot 3.4 : TestContainers à maturité</h3>
              
              <div class="prose prose-invert max-w-none text-gray-300">
                <p class="mb-4">
                  <strong>Spring Boot 3.4</strong> (novembre 2024) élève TestContainers à un nouveau niveau de maturité 
                  avec des améliorations structurelles majeures pour l'intégration et les performances.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">Redis Stack et Hazelcast natifs</h4>
                <p class="mb-3">
                  Spring Boot 3.4 ajoute le support natif pour <strong>Redis Stack</strong> via 
                  <code class="bg-gray-800 px-2 py-1 text-yellow-400">redis/redis-stack-server</code> et 
                  <strong>Hazelcast</strong> avec <code class="bg-gray-800 px-2 py-1 text-yellow-400">@ServiceConnection</code>. 
                  Ces ajouts élargissent considérablement les possibilités de test distribué.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">Startup parallèle optimisé</h4>
                <p class="mb-3">
                  La propriété <code class="bg-gray-800 px-2 py-1 text-yellow-400">spring.testcontainers.beans.startup=parallel</code> 
                  permet le démarrage simultané des containers. Les suites de tests complexes voient leurs temps 
                  d'exécution divisés par 2 à 3 selon la configuration.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">Intégration Docker Compose renforcée</h4>
                <p class="mb-3">
                  Spring Boot 3.4 étend le support des images <strong>Bitnami</strong> et optimise la détection 
                  automatique des services. L'expérience développeur devient seamless entre tests et développement local.
                </p>
                
                <p>
                  Ces évolutions consolident TestContainers comme solution de référence pour l'infrastructure-as-code 
                  dans l'écosystème Spring, garantissant une parité parfaite dev/test/prod.
                </p>
              </div>
              
              <div class="mt-8">
                <a href="https://spring.io/blog/2024/11/21/spring-boot-3-4-0-available-now" target="_blank" 
                  class="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition font-medium">
                  <Icon icon="mdi:external-link" class="mr-2" width="16" />
                  Spring Boot 3.4 Release Notes
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- RSS Feeds Section -->
    <section ref="feedsSection" class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Spring Blog Feed -->
        <div ref="feedCard1" class="transform translate-y-20 opacity-0">
          <div class="bg-gray-900 rounded-none overflow-hidden shadow-xl p-6 border-t-4 border-yellow-400 relative">
            <!-- L bottom right reversed -->
            <div class="absolute bottom-0 right-0 l-decoration-reversed"></div>

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
            <!-- L bottom right reversed -->
            <div class="absolute bottom-0 right-0 l-decoration-reversed"></div>

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

    // Articles section animations
    gsap.to(this.$refs.articlesTitle, {
      scrollTrigger: {
        trigger: this.$refs.articlesSection,
        start: "top 80%"
      },
      opacity: 1,
      y: 0,
      duration: 0.8
    });

    // Articles staggered animation  
    gsap.to([this.$refs.article1, this.$refs.article2, this.$refs.article3], {
      scrollTrigger: {
        trigger: this.$refs.articlesSection,
        start: "top 70%"
      },
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      delay: 0.3
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

        // Données simulées basées sur le contenu réel du blog Spring
        const blogMockItems = [
          {
            title: 'Spring AI 1.0 GA Released',
            link: 'https://spring.io/blog/2025/05/20/spring-ai-1-0-GA-released',
            date: '2025-05-20T10:00:00Z',
            author: 'Mark Pollack',
            description: 'We are excited to announce Spring AI 1.0 GA, featuring ChatClient interface supporting 20 AI models, Advisors API, and full Model Context Protocol support.'
          },
          {
            title: 'Spring Boot 3.5.0 available now',
            link: 'https://spring.io/blog/2025/05/22/spring-boot-3-5-0-available-now',
            date: '2025-05-22T14:00:00Z',
            author: 'Stéphane Nicoll',
            description: 'Spring Boot 3.5.0 has been released with significant new features including TaskDecorator support for scheduled tasks and Vibur DBCP connection pool support.'
          },
          {
            title: 'Spring Modulith 1.4 Released',
            link: 'https://spring.io/blog/2025/05/28/spring-modulith-1-4-released',
            date: '2025-05-28T09:30:00Z',
            author: 'Oliver Drotbohm',
            description: 'Spring Modulith 1.4 introduces refinements in ApplicationModule abstractions, SPI for detecting NamedInterfaces, and improved integration testing capabilities.'
          },
          {
            title: 'Spring Security 6.4.0 available now',
            link: 'https://spring.io/blog/2024/11/21/spring-security-6-4-0-available-now',
            date: '2024-11-21T16:00:00Z',
            author: 'Spring Security Team',
            description: 'Spring Security 6.4 delivers Passkeys support, One-Time Tokens, and simplified OAuth 2.0 configuration with numerous deprecations and replacements.'
          }
        ];

        const engineeringMockItems = [
          {
            title: 'Runtime Efficiency with Spring Framework 6.2',
            link: 'https://spring.io/blog/2024/11/22/runtime-efficiency-with-spring',
            date: '2024-11-22T11:00:00Z',
            author: 'Juergen Hoeller',
            description: 'Exploring Ahead-of-Time optimizations in Spring Framework 6.2, including GraalVM native images, CRaC, CDS, and the upcoming AOT cache from Project Leyden.'
          },
          {
            title: 'Spring Boot 3.4 TestContainers Enhancements',
            link: 'https://spring.io/blog/2024/11/21/spring-boot-3-4-testcontainers',
            date: '2024-11-21T13:30:00Z',
            author: 'Moritz Halbritter',
            description: 'Spring Boot 3.4 introduces Redis Stack support, Hazelcast integration, parallel container startup, and enhanced Docker Compose capabilities for TestContainers.'
          },
          {
            title: 'Observability Improvements in Spring Boot 3.4',
            link: 'https://spring.io/blog/2024/11/20/observability-spring-boot-3-4',
            date: '2024-11-20T08:45:00Z',
            author: 'Marcin Grzejszczak',
            description: 'Spring Boot 3.4 enhances observability with structured logging support for ECS, Logstash, and GELF formats, plus expanded virtual thread integration.'
          },
          {
            title: 'Spring Framework 6.2 and Virtual Threads',
            link: 'https://spring.io/blog/2024/11/15/spring-framework-6-2-virtual-threads',
            date: '2024-11-15T15:20:00Z',
            author: 'Sébastien Deleuze',
            description: 'Deep dive into Spring Framework 6.2\'s enhanced virtual thread support, performance improvements, and integration with reactive programming models.'
          }
        ];

        this.feeds[feedType] = feedType === 'blog' ? blogMockItems : engineeringMockItems;
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

/* Section title bar */
.section-title-bar {
  width: 80px;
  height: 3px;
  background-color: #F7DE3D;
  position: relative;
  margin-top: 10px;
}

.section-title-bar::before {
  content: '';
  position: absolute;
  left: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  border-left: 3px solid #F7DE3D;
  border-top: 3px solid #F7DE3D;
}

.section-title-bar::after {
  content: '';
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  border-right: 3px solid #F7DE3D;
  border-top: 3px solid #F7DE3D;
}

/* Article code styling */
.prose code {
  font-size: 0.875rem;
  font-weight: 600;
}
</style>