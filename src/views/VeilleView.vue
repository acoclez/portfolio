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
          Ma veille technologique sur Laravel et son écosystème.
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
      </div>

      <div class="space-y-12">
        <!-- Article 1: Laravel 12 Starter Kits (February 2025) - Most Recent -->
        <article ref="article1" class="transform translate-y-20 opacity-0">
          <div class="bg-gray-900 rounded-none overflow-hidden shadow-xl border-l-4 border-yellow-400 relative">
            <!-- L top right decoration -->
            <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>
            
            <div class="p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <Icon icon="mdi:rocket-launch" class="text-yellow-400 mr-3" width="28" />
                  <span class="text-sm text-gray-400 bg-gray-800 px-3 py-1">Nouveauté majeure</span>
                </div>
                <span class="text-sm text-gray-500 font-medium">Février 2025</span>
              </div>
              
              <h3 class="text-2xl font-bold mb-6">Laravel 12 : Nouveaux Starter Kits pour React, Vue et Livewire</h3>
              
              <div class="prose prose-invert max-w-none text-gray-300">
                <p class="mb-4">
                  Sorti le <strong>24 février 2025</strong>, Laravel 12 marque une évolution majeure avec ses nouveaux 
                  starter kits officiels, remplaçant Breeze et Jetstream par une approche modulaire et moderne.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">Trois stacks au choix</h4>
                <p class="mb-3">
                  Le <strong>React Starter Kit</strong> intègre Inertia.js 2, React 19, TypeScript et shadcn/ui pour des 
                  interfaces SPA performantes. Le <strong>Vue Starter Kit</strong> propose Vue 3 avec shadcn-vue. 
                  Le <strong>Livewire 3 Kit</strong> combine Volt, Flux UI et full-stack reactivity sans JavaScript complexe.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">WorkOS AuthKit intégré</h4>
                <p class="mb-3">
                  Chaque kit existe en variante WorkOS offrant <strong>authentification sociale</strong>, 
                  <strong>passkeys</strong> et <strong>SSO</strong> enterprise out-of-the-box. Plus besoin de configurer 
                  manuellement OAuth ou WebAuthn.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">Zéro breaking changes</h4>
                <p>
                  Laravel 12 est la première version majeure sans changements cassants. La migration depuis Laravel 11 
                  se fait en quelques minutes, permettant d'adopter immédiatement les nouveaux starter kits sans risque.
                </p>
              </div>
              
              <div class="mt-8">
                <a href="https://laravel.com/docs/12.x/releases" target="_blank" 
                  class="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition font-medium">
                  <Icon icon="mdi:external-link" class="mr-2" width="16" />
                  Laravel 12 Release Notes
                </a>
              </div>
            </div>
          </div>
        </article>

        <!-- Article 2: Laravel 12.8 Automatic Eager Loading (September 2025) -->
        <article ref="article2" class="transform translate-y-20 opacity-0">
          <div class="bg-gray-900 rounded-none overflow-hidden shadow-xl border-l-4 border-yellow-400 relative">
            <!-- L top right decoration -->
            <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>
            
            <div class="p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <Icon icon="mdi:flash" class="text-yellow-400 mr-3" width="28" />
                  <span class="text-sm text-gray-400 bg-gray-800 px-3 py-1">Performance</span>
                </div>
                <span class="text-sm text-gray-500 font-medium">Septembre 2025</span>
              </div>
              
              <h3 class="text-2xl font-bold mb-6">Laravel 12.8 : Eager Loading automatique contre le N+1</h3>
              
              <div class="prose prose-invert max-w-none text-gray-300">
                <p class="mb-4">
                  Laravel 12.8 introduit l'<strong>automatic eager loading</strong>, éliminant le problème N+1 
                  sans que les développeurs n'ajoutent manuellement <code class="bg-gray-800 px-2 py-1 text-yellow-400">with()</code>.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">Détection intelligente</h4>
                <p class="mb-3">
                  Lorsqu'une relation est accédée plusieurs fois dans une boucle, Laravel 12.8 détecte le pattern et 
                  charge automatiquement la relation en une seule requête. Plus besoin de se souvenir d'optimiser manuellement.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">Lazy collections améliorées</h4>
                <p class="mb-3">
                  Les lazy collections gèrent désormais mieux les gros datasets avec moins de mémoire. Nouvelles méthodes 
                  pour filtrer et sortir d'itérations précocement, crucial pour le traitement de fichiers volumineux ou APIs.
                </p>
                
                <p>
                  Cette amélioration transforme l'expérience développeur : performances optimales par défaut, 
                  sans sacrifier la lisibilité du code ou forcer des patterns complexes.
                </p>
              </div>
              
              <div class="mt-8">
                <a href="https://medium.com/@jha.ameet/laravel-12-x-updates-top-10-features-for-developers-2025-guide-a947abc2f6e0" target="_blank" 
                  class="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition font-medium">
                  <Icon icon="mdi:external-link" class="mr-2" width="16" />
                  Laravel 12.x Complete Guide
                </a>
              </div>
            </div>
          </div>
        </article>

        <!-- Article 3: Native Health Checks (February 2025) -->
        <article ref="article3" class="transform translate-y-20 opacity-0">
          <div class="bg-gray-900 rounded-none overflow-hidden shadow-xl border-l-4 border-yellow-400 relative">
            <!-- L top right decoration -->
            <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>
            
            <div class="p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                  <Icon icon="mdi:heart-pulse" class="text-yellow-400 mr-3" width="28" />
                  <span class="text-sm text-gray-400 bg-gray-800 px-3 py-1">DevOps</span>
                </div>
                <span class="text-sm text-gray-500 font-medium">Février 2025</span>
              </div>
              
              <h3 class="text-2xl font-bold mb-6">Laravel 12 : Health Checks natifs pour Kubernetes</h3>
              
              <div class="prose prose-invert max-w-none text-gray-300">
                <p class="mb-4">
                  Laravel 12 introduit des <strong>health checks natifs</strong> accessibles via endpoints dédiés, 
                  éliminant les packages tiers pour le monitoring d'infrastructure.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">Endpoints configurables</h4>
                <p class="mb-3">
                  Vérifiez automatiquement les connexions database, cache, queues et services externes. 
                  Parfait pour Kubernetes liveness/readiness probes ou Docker Swarm health checks sans configuration complexe.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">Artisan CLI modernisé</h4>
                <p class="mb-3">
                  Les commandes Artisan affichent désormais des messages plus clairs avec formatage amélioré. 
                  Migrations, queues et config caching deviennent plus rapides et intuitifs pour l'automatisation CI/CD.
                </p>
                
                <h4 class="text-yellow-400 font-bold mt-6 mb-3">xxHash pour les performances</h4>
                <p>
                  Remplacement interne de MD5 par xxHash pour des hash paths plus performants. Amélioration transparente 
                  sans changement de code applicatif, mais avec gains mesurables sur les applications à fort trafic.
                </p>
              </div>
              
              <div class="mt-8">
                <a href="https://acquaintsoft.com/blog/whats-new-in-laravel-12" target="_blank" 
                  class="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition font-medium">
                  <Icon icon="mdi:external-link" class="mr-2" width="16" />
                  What's New in Laravel 12
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
        <div ref="feedCard1" class="transform translate-y-20 opacity-0">
          <VeilleFeedCard
            title="Laravel News"
            :items="feeds.news"
            :isLoading="isLoading.news"
            :error="error.news"
            feederUrl="https://feeder.co/discover/987229b0ac/laravel-news-com"
          />
        </div>

        <div ref="feedCard2" class="transform translate-y-20 opacity-0">
          <VeilleFeedCard
            title="Laravel Releases"
            :items="feeds.releases"
            :isLoading="isLoading.releases"
            :error="error.releases"
            feederUrl="https://feeder.co/discover/987229b0ac/laravel-news-com"
          />
        </div>
      </div>

      <div ref="springOverview" class="mt-16 transform translate-y-20 opacity-0">
        <LaravelOverview />
      </div>
    </section>
    <div class="h-24 bg-gradient-to-b from-black to-gray-900"></div>

    <CallToActionSection />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/vue';
import VeilleFeedCard from '@/components/veille/VeilleFeedCard.vue';
import LaravelOverview from '@/components/veille/LaravelOverview.vue';
import CallToActionSection from '@/components/home/CallToActionSection.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'VeilleView',
  components: {
    Icon,
    VeilleFeedCard,
    LaravelOverview,
    CallToActionSection
  },
  data() {
    return {
      feeds: {
        news: [],
        releases: []
      },
      isLoading: {
        news: true,
        releases: true
      },
      error: {
        news: null,
        releases: null
      }
    }
  },
  mounted() {
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

    gsap.to(this.$refs.articlesTitle, {
      scrollTrigger: {
        trigger: this.$refs.articlesSection,
        start: "top 80%"
      },
      opacity: 1,
      y: 0,
      duration: 0.8
    });

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

    gsap.to(this.$refs.springOverview, {
      scrollTrigger: {
        trigger: this.$refs.springOverview,
        start: "top 80%"
      },
      opacity: 1,
      y: 0,
      duration: 0.8
    });

    this.fetchRSSFeed('laravel-news', 'news');
    this.fetchRSSFeed('laravel-releases', 'releases');
  },
  methods: {
    async fetchRSSFeed(feedType, dataKey) {
      this.isLoading[dataKey] = true;
      this.error[dataKey] = null;

      try {
        await new Promise(resolve => setTimeout(resolve, 800));

        const newsMockItems = [
          {
            title: 'PHP 8.5 Released with Pipe Operator and New Array Functions',
            link: 'https://laravel-news.com/php-8-5-0',
            date: '2025-11-19T10:00:00Z',
            author: 'Paul Redmond',
            description: 'PHP 8.5 introduces the Pipe operator for chaining callables, native array_first() and array_last() functions, a new URI extension, and improved error handling capabilities.'
          },
          {
            title: 'Laravel for the Rest of Us Book Launch',
            link: 'https://laravel-news.com/laravel-for-the-rest-of-us',
            date: '2025-11-18T14:30:00Z',
            author: 'Pete Heslop',
            description: 'New book by Pete Heslop helps non-technical teams understand Laravel development, bridging communication between developers and business stakeholders.'
          },
          {
            title: 'Livewire 4 Beta: Major Changes and Upgrade Guide',
            link: 'https://laraveldaily.com/post/livewire-4-beta',
            date: '2025-11-13T09:15:00Z',
            author: 'Laravel Daily',
            description: 'Livewire 4 beta brings significant performance improvements, better Alpine.js integration, and streamlined syntax for building reactive Laravel interfaces.'
          },
          {
            title: 'Laravel Cloud WebSockets: Managed Reverb Clusters',
            link: 'https://laravel.com/blog/laravel-cloud-websockets',
            date: '2025-11-13T11:20:00Z',
            author: 'Laravel Team',
            description: 'Launch real-time features with managed Laravel Reverb clusters on Laravel Cloud, offering up to 50% cost savings compared to third-party WebSocket services.'
          },
          {
            title: 'Laravel Boost: AI-Powered Development Acceleration',
            link: 'https://blog.laravel.com/laracon-us-2025-boost',
            date: '2025-11-07T16:45:00Z',
            author: 'Taylor Otwell',
            description: 'Laravel Boost provides essential context for AI coding assistants to generate high-quality Laravel-specific code, accelerating development workflows significantly.'
          }
        ];

        const releasesMockItems = [
          {
            title: 'Laracon US 2025: Major Announcements Recap',
            link: 'https://blog.laravel.com/everything-we-announced-at-laracon-us-2025',
            date: '2025-11-15T15:00:00Z',
            author: 'Laravel Team',
            description: 'New Laravel Forge redesign with instant provisioning via Laravel VPS, Laravel MCP library for AI integration, and Boost for AI-assisted development announced at Laracon US.'
          },
          {
            title: 'Laravel 13 Preview: Q1 2026 Release Details',
            link: 'https://medium.com/laravel-13-preview',
            date: '2025-11-05T10:30:00Z',
            author: 'Subhash Ladumor',
            description: 'Laravel 13 will require PHP 8.3+, introduce new Reverb driver improvements, enhanced testing profiling, and updated Symfony components for better security.'
          },
          {
            title: 'Laravel MCP: Model Context Protocol Library',
            link: 'https://github.com/laravel/mcp',
            date: '2025-11-01T13:00:00Z',
            author: 'Laravel Team',
            description: 'Build Model Context Protocols easily so Laravel apps can integrate seamlessly with AI chats and assistants, meeting users where they are.'
          },
          {
            title: 'Livewire 4 Beta: Full-Stack Framework Evolution',
            link: 'https://livewire.laravel.com/docs/v4',
            date: '2025-10-28T12:00:00Z',
            author: 'Caleb Porzio',
            description: 'Livewire 4 beta includes performance optimizations, refined API, better Alpine.js synergy, and streamlined state management for reactive components.'
          },
          {
            title: 'Laravel Coding with AI Agents: November 2025 Update',
            link: 'https://laraveldaily.com/course/laravel-ai-agents',
            date: '2025-10-20T08:00:00Z',
            author: 'Povilas Korop',
            description: 'Overview of using Cursor, Claude Code, and Codex CLI for Laravel projects in late 2025, covering best practices and workflow optimizations.'
          }
        ];

        this.feeds[dataKey] = feedType === 'laravel-news' ? newsMockItems : releasesMockItems;

      } catch (error) {
        console.error(`Erreur de chargement du flux ${feedType}:`, error);
        this.error[dataKey] = 'Impossible de charger les articles. Veuillez réessayer plus tard.';
      } finally {
        this.isLoading[dataKey] = false;
      }
    }
  }
}
</script>

<style scoped>
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

.prose code {
  font-size: 0.875rem;
  font-weight: 600;
}
</style>