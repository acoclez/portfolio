<!-- src/components/about/TechnologiesGrid.vue -->
<template>
    <div>
        <h2 class="text-3xl font-bold text-center mb-6">Compétences</h2>
        <p class="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Les compétences que je possède et utilise régulièrement
        </p>

        <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <li v-for="tech in technologies" :key="tech.name"
                class="bg-gray-800 rounded-lg p-6 flex flex-col items-center transform transition hover:scale-105 hover:bg-gray-700">
                <img :src="tech.icon" :alt="tech.name" class="w-16 h-16 mb-4">
                <span class="font-medium">{{ tech.name }}</span>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'TechnologiesGrid',
    data() {
        return {
            technologies: [
                { name: 'PHP', icon: 'mdi:language-php' },
                { name: 'HTML', icon: 'mdi:language-html5' },
                { name: 'CSS', icon: 'mdi:language-css3' },
                { name: 'JavaScript', icon: 'mdi:language-javascript' },
                { name: 'TypeScript', icon: 'mdi:language-typescript' },
                { name: 'Java', icon: 'mdi:language-java' },
                { name: 'Git', icon: 'mdi:git' },
                { name: 'GitHub', icon: 'mdi:github' },
                { name: 'MySQL', icon: 'mdi:database' },
                { name: 'REST', icon: 'mdi:api' },
                { name: 'GraphQL', icon: 'mdi:graphql' },
                { name: 'Spring', icon: 'mdi:leaf-circle' },
                { name: 'Laravel', icon: 'mdi:laravel' },
                { name: 'Vue.js', icon: 'mdi:vuejs' },
                { name: 'Nuxt.js', icon: 'mdi:nuxt' },
                { name: 'Tailwind', icon: 'mdi:tailwind' },
                { name: 'Docker', icon: 'mdi:docker' },
                { name: 'Kubernetes', icon: 'mdi:kubernetes' },
            ]
        }
    }
}
</script>