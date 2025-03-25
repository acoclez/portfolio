<template>
    <section class="py-16 px-4">
      <div class="container mx-auto">
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-description">{{ description }}</p>
        
        <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <TechItem 
            v-for="tech in technologies" 
            :key="tech.id" 
            :name="tech.name" 
            :icon="tech.icon" 
          />
        </ul>
        
        <div class="mt-12 text-center" v-if="showViewMore">
          <slot name="viewMore">
            <router-link 
              :to="viewMoreLink" 
              class="inline-flex items-center gap-2 bg-background-light hover:bg-background-light/80 text-text-primary px-6 py-3 rounded-full transition-standard"
            >
              <img 
                src="/assets/img/icons/circle.svg" 
                alt="See More Icon" 
                class="w-5 h-5"
              />
              {{ viewMoreText }}
            </router-link>
          </slot>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import TechItem from '@/components/skills/TechItem.vue'
  
  export default {
    name: 'TechsList',
    components: {
      TechItem
    },
    props: {
      title: {
        type: String,
        default: 'Compétences'
      },
      description: {
        type: String,
        default: 'Les compétences que je possède et utilise régulièrement'
      },
      technologies: {
        type: Array,
        required: true
      },
      showViewMore: {
        type: Boolean,
        default: false
      },
      viewMoreLink: {
        type: String,
        default: '/about'
      },
      viewMoreText: {
        type: String,
        default: 'Voir plus'
      }
    }
  }
  </script>