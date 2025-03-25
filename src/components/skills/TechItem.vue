<template>
    <li class="bg-background-light rounded-lg p-5 transform hover:-translate-y-1 transition-standard">
      <div class="flex flex-col items-center">
        <img 
          :src="icon" 
          :alt="name" 
          class="w-12 h-12 mb-3"
          draggable="false"
        />
        <span class="text-text-primary">{{ name }}</span>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    name: 'TechItem',
    props: {
      name: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      }
    }
  }
  </script>