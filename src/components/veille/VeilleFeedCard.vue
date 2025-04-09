<!-- src/components/veille/VeilleFeedCard.vue -->
<template>
    <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-6">{{ title }}</h2>

        <div v-if="isLoading" class="flex justify-center py-8">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>

        <div v-else-if="error" class="p-4 bg-red-900 bg-opacity-30 text-red-300 rounded-lg">
            {{ error }}
        </div>

        <div v-else class="space-y-4">
            <div v-for="(item, index) in items" :key="index"
                class="bg-gray-700 bg-opacity-50 rounded-lg overflow-hidden hover:bg-opacity-70 transition">
                <a :href="item.link" target="_blank" class="block p-4">
                    <h3 class="text-lg font-medium mb-2">{{ item.title }}</h3>
                    <div class="flex items-center text-sm text-gray-400 mb-3">
                        <span v-if="item.date" class="mr-3">{{ formatDate(item.date) }}</span>
                        <span v-if="item.author">Par {{ item.author }}</span>
                    </div>
                    <p v-if="item.description" class="text-gray-300 text-sm line-clamp-3">
                        {{ item.description }}
                    </p>
                </a>
            </div>
        </div>

        <a :href="feederUrl" target="_blank" class="inline-block mt-6 text-gray-400 hover:text-white transition">
            Voir sur Feeder →
        </a>
    </div>
</template>
  
<script>
export default {
    name: 'VeilleFeedCard',
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            default: () => []
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        error: {
            type: String,
            default: null
        },
        feederUrl: {
            type: String,
            required: true
        }
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
        }
    }
}
</script>
  
<style scoped>
/* Line clamp for descriptions */
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>