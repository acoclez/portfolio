<template>
    <div class="w-full">
        <div class="bg-gray-900 p-8 rounded-none shadow-2xl border-t-4 border-yellow-400 relative">
            <!-- L top right decoration -->
            <div class="absolute top-0 right-0 l-decoration-small-reversed top-right"></div>

            <h2 class="text-2xl font-bold mb-6">Retrouvez-moi sur</h2>
            <div class="grid grid-cols-3 gap-4 mb-8">
                <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" target="_blank"
                    class="transform transition hover:scale-110 bg-gray-800 p-4 rounded-full hover:bg-gray-700 hover:shadow-lg hover:shadow-yellow-900/10 flex items-center justify-center">
                    <Icon :icon="social.icon" class="text-yellow-400" width="36" />
                </a>
            </div>

            <div class="mt-8">
                <p class="text-gray-300">
                    N'hésitez pas à me suivre pour découvrir mes projets et mes contributions au monde du développement web.
                </p>

                <div class="flex flex-col space-y-4 mt-8">
                    <div class="contact-item flex items-center transform">
                        <Icon icon="mdi:map-marker" class="text-yellow-400 mr-3" width="24" />
                        <span class="text-gray-300">Bordeaux, France</span>
                    </div>
                </div>
            </div>

            <!-- CV Download Button -->
            <div class="mt-8 pt-8 border-t border-gray-800">
                <a href="/assets/cv.pdf" target="_blank"
                    class="flex items-center justify-center w-full py-3 px-6 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none border-b-2 border-yellow-400 transition transform hover:-translate-y-1 group">
                    <Icon icon="mdi:file-document" class="mr-2 text-yellow-400 group-hover:animate-bounce" width="24" />
                    Télécharger mon CV
                </a>
            </div>
        </div>
    </div>
</template>
  
<script>
import { gsap } from 'gsap';
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
                    url: 'https://github.com/',
                    icon: 'mdi:github'
                },
                {
                    name: 'GitLab',
                    url: 'https://gitlab.com/',
                    icon: 'mdi:gitlab'
                },
                {
                    name: 'Twitter',
                    url: 'https://twitter.com/',
                    icon: 'mdi:twitter'
                },
                {
                    name: 'LinkedIn',
                    url: 'https://linkedin.com/',
                    icon: 'mdi:linkedin'
                },
                {
                    name: 'Stack Overflow',
                    url: 'https://stackoverflow.com/',
                    icon: 'mdi:stack-overflow'
                },
                {
                    name: 'Medium',
                    url: 'https://medium.com/',
                    icon: 'mdi:medium'
                }
            ]
        };
    },
    mounted() {
        gsap.from('a.transform.transition', {
            scale: 0,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            delay: 0.3,
            ease: "back.out(1.7)"
        });

        gsap.from('.contact-item', {
            x: -20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            delay: 0.6
        });

        gsap.from('a.flex.items-center.justify-center.w-full', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: 0.8
        });
    }
};
</script>
  
<style scoped>
.border-t-4.border-yellow-400 {
    animation: borderPulse 4s infinite;
}

@keyframes borderPulse {
    0% {
        border-color: #F7DE3D;
    }

    50% {
        border-color: #FDE68A;
    }

    100% {
        border-color: #F7DE3D;
    }
}

a.transform.transition {
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-item a:hover {
    text-shadow: 0 0 15px rgba(247, 222, 61, 0.5);
}

.group:hover .group-hover\:animate-bounce {
    animation: bounce 1s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-6px);
    }
}

.l-decoration-small-reversed {
    position: absolute;
    width: 30px;
    height: 30px;
}

.l-decoration-small-reversed::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #F7DE3D;
    right: 0;
    bottom: 0;
}

.l-decoration-small-reversed::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #F7DE3D;
    right: 0;
    bottom: 0;
}

.l-decoration-small-reversed.top-right::before {
    right: 0;
    top: 0;
}

.l-decoration-small-reversed.top-right::after {
    right: 0;
    top: 0;
}</style>