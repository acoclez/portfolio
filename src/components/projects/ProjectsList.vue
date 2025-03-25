<template>
    <li class="bg-background-light rounded-lg overflow-hidden transition-standard hover:-translate-y-1">
      <a 
        :href="url" 
        target="_blank" 
        rel="noopener noreferrer"
        class="block"
      >
        <div class="md:flex">
          <div class="md:w-1/3 overflow-hidden">
            <img 
              :src="thumbnail" 
              :alt="`${title} thumbnail`"
              class="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-105"
              draggable="false"
            />
          </div>
          <div class="p-6 md:w-2/3 text-left">
            <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
            <p class="text-text-secondary mb-4">{{ description }}</p>
            
            <div v-if="tags && tags.length" class="flex flex-wrap gap-2 mt-4">
              <span 
                v-for="tag in tags" 
                :key="tag"
                class="px-3 py-1 text-xs rounded-full bg-background text-text-secondary"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </a>
    </li>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      thumbnail: {
        type: String,
        required: true
      },
      url: {
        type: String,
        default: '#'
      },
      tags: {
        type: Array,
        default: () => []
      }
    }
  }
  </script>