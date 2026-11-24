<!-- src/components/about/AboutIntro.vue -->
<template>
    <div class="flex flex-col md:flex-row items-center gap-8">
        <div>
            <h2 class="text-3xl font-bold mb-6">Antoine Coclez</h2>
            <div class="text-gray-300 space-y-4">
                <p v-for="(paragraph, index) in $t('about.intro')" :key="index">{{ paragraph }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutIntro'
}
</script>
