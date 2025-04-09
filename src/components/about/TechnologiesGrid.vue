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
                { name: 'PHP', icon: '/assets/img/techs/php.svg' },
                { name: 'HTML', icon: '/assets/img/techs/html.svg' },
                { name: 'CSS', icon: '/assets/img/techs/css.svg' },
                { name: 'JavaScript', icon: '/assets/img/techs/javascript.svg' },
                { name: 'Java', icon: '/assets/img/techs/java.svg' },
                { name: 'Git', icon: '/assets/img/techs/git.svg' },
                { name: 'GitHub', icon: '/assets/img/techs/github.svg' },
                { name: 'MySQL', icon: '/assets/img/techs/mysql.svg' }
            ]
        }
    }
}
</script>