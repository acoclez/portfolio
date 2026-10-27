<!-- src/components/contact/SocialLinks.vue -->
<template>
    <div class="w-full h-full">
        <div class="h-full flex flex-col bg-gray-900 p-8 rounded-none shadow-2xl border-t-4 border-yellow-400 relative">
            <h2 class="text-2xl font-bold mb-6">Retrouvez-moi sur</h2>
            <div class="grid grid-cols-3 gap-4 mb-8">
                <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" target="_blank" :aria-label="social.name"
                    class="social-link transform transition hover:scale-110 bg-gray-800 p-4 rounded-full hover:bg-gray-700 hover:shadow-lg hover:shadow-yellow-900/10 flex items-center justify-center">
                    <Icon :icon="social.icon" class="text-yellow-400" width="36" />
                </a>
            </div>

            <div class="mt-8">
                <p class="text-gray-300">
                    N'hésitez pas à me suivre pour découvrir mes projets et mes contributions au monde du développement web.
                </p>

                <div class="flex flex-col space-y-4 mt-8">
                    <div class="contact-item flex items-center transform">
                        <Icon icon="mdi:email-outline" class="text-yellow-400 mr-3 shrink-0" width="24" />
                        <a href="mailto:contact@acoclez.dev" class="text-gray-300 hover:text-yellow-400 transition-standard break-all">contact@acoclez.dev</a>
                    </div>
                    <div class="contact-item flex items-center transform">
                        <Icon icon="mdi:map-marker" class="text-yellow-400 mr-3" width="24" />
                        <span class="text-gray-300">Agen, France</span>
                    </div>
                </div>
            </div>

            <!-- CV Download Button, pinned to the bottom so the card can stretch to the row height -->
            <div class="mt-auto pt-8 border-t border-gray-800">
                <a href="/assets/CV_Antoine_COCLEZ.pdf" target="_blank"
                    class="flex items-center justify-center w-full py-3 px-6 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none border-b-2 border-yellow-400 transition transform hover:-translate-y-1 group">
                    <Icon icon="mdi:file-document" class="mr-2 text-yellow-400 group-hover:animate-bounce" width="24" />
                    Télécharger mon CV
                </a>
            </div>
        </div>
    </div>
</template>
  
<script>
import { Icon } from '@iconify/vue';

export default {
    name: 'SocialLinks',
    components: {
        Icon
    },
    data() {
        return {
            socialLinks: [
                {
                    name: 'GitHub',
                    url: 'https://github.com/acoclez',
                    icon: 'mdi:github'
                },
                {
                    name: 'GitLab',
                    url: 'https://gitlab.com/ACoclez',
                    icon: 'mdi:gitlab'
                },
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/acoclez/',
                    icon: 'mdi:linkedin'
                }
            ]
        };
    }
};
</script>
  
<style scoped>
.social-link {
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-item a:hover {
    text-shadow: 0 0 15px rgba(247, 222, 61, 0.5);
}

.group:hover .group-hover\:animate-bounce {
    animation: bounce 1s infinite;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-6px);
    }
}
</style>