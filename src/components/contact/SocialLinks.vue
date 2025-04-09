<!-- src/components/contact/SocialLinks.vue -->
<template>
    <div class="p-8 bg-gray-800 rounded-lg">
        <h2 class="text-2xl font-bold mb-6">Retrouvez-moi aussi sur</h2>
        <div class="flex justify-center space-x-6">
            <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" target="_blank"
                class="transform transition hover:scale-110">
                <img :src="social.icon" :alt="social.name" class="w-12 h-12" />
            </a>
        </div>
        <div class="mt-8">
            <p class="text-gray-300">
                N'hésitez pas à me contacter pour discuter de vos projets ou simplement pour échanger sur le développement
                web.
            </p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SocialLinks',
    data() {
        return {
            socialLinks: [
                {
                    name: 'GitHub',
                    url: 'https://github.com/',
                    icon: '/assets/img/socials/github.svg'
                },
                {
                    name: 'GitLab',
                    url: 'https://gitlab.com/',
                    icon: '/assets/img/socials/gitlab.svg'
                },
                {
                    name: 'Twitter',
                    url: 'https://twitter.com/',
                    icon: '/assets/img/socials/twitter.svg'
                }
            ]
        }
    }
}
</script>