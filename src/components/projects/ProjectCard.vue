<!-- src/components/projects/ProjectCard.vue -->
<template>
    <div
        class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-102 hover:shadow-xl">
        <div class="flex flex-col md:flex-row">
            <div class="md:w-2/5 h-64 overflow-hidden">
                <img :src="project.thumbnail" :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div class="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-bold mb-4">{{ project.title }}</h3>
                    <p class="text-gray-300 mb-6">{{ project.description }}</p>

                    <div v-if="project.technologies" class="flex flex-wrap gap-2 mb-4">
                        <span v-for="tech in project.technologies" :key="tech"
                            class="px-3 py-1 text-sm rounded-full bg-blue-900 text-blue-100">
                            {{ tech }}
                        </span>
                    </div>
                </div>

                <div class="mt-4 flex gap-4">
                    <a v-if="project.demo" :href="project.demo" target="_blank"
                        class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
                        Voir le site
                    </a>
                    <a v-if="project.github" :href="project.github" target="_blank"
                        class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition">
                        Voir le code
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>