<!-- src/views/VeilleView.vue (Refactored) -->
<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="py-16 px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Veille</h1>
      <p class="text-xl text-gray-300">
        Là où je partage mes connaissances sur mon sujet de veille, Spring.
      </p>
    </section>

    <!-- RSS Feeds Section -->
    <section class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Spring Blog Feed -->
        <VeilleFeedCard
          title="Spring Blog"
          :items="feeds.blog"
          :isLoading="isLoading.blog"
          :error="error.blog"
          feederUrl="https://feeder.co/discover/3bf86e440d/spring-io-blog"
        />
        
        <!-- Spring Engineering Feed -->
        <VeilleFeedCard
          title="Spring Engineering"
          :items="feeds.engineering"
          :isLoading="isLoading.engineering"
          :error="error.engineering"
          feederUrl="https://feeder.co/discover/0856437d81/spring-io-blog-category-engineering"
        />
      </div>
      
      <!-- Spring Framework Overview -->
      <SpringOverview />
    </section>

    <!-- Call To Action -->
    <CallToActionSection />
  </div>
</template>

<script>
import VeilleFeedCard from '@/components/veille/VeilleFeedCard.vue';
import SpringOverview from '@/components/veille/SpringOverview.vue';
import CallToActionSection from '@/components/shared/CallToActionSection.vue';

export default {
  name: 'VeilleView',
  components: {
    VeilleFeedCard,
    SpringOverview,
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
    this.fetchRSSFeed('https://spring.io/blog.atom', 'blog');
    this.fetchRSSFeed('https://spring.io/blog/category/engineering.atom', 'engineering');
  },
  methods: {
    // Dans un environnement réel, vous devriez utiliser un proxy côté serveur
    // pour récupérer les flux RSS à cause des restrictions CORS
    async fetchRSSFeed(url, feedType) {
      this.isLoading[feedType] = true;
      this.error[feedType] = null;

      try {
        // Note: Ceci ne fonctionnera pas directement en raison des restrictions CORS
        // Vous devriez utiliser un proxy côté serveur ou une fonction serverless
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