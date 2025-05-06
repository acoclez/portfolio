<!-- src/components/home/TechnologiesSection.vue -->
<template>
    <section ref="techSection" class="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative">
        <!-- Decorative element -->
        <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
        <div class="max-w-6xl mx-auto">
            <div class="relative flex flex-col items-center mb-14">
                <h2 ref="techTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">
                    Compétences
                </h2>
                <!-- Section Title Decoration -->
                <div class="section-title-bar"></div>
            </div>
            <p ref="techDesc"
                class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
                Les compétences que je possède et utilise régulièrement
            </p>

            <div ref="techGrid"
                class="grid grid-cols-2 md:grid-cols-3 gap-4 transform translate-y-20 opacity-0 max-w-3xl mx-auto">
                <div v-for="tech in technologies" :key="tech.name"
                    class="tech-item bg-gray-800 py-2 px-3 flex items-center transition-all duration-300 border-l-2 border-transparent hover:border-yellow-400 transform hover:-translate-y-1 hover:shadow-lg">
                    <Icon :icon="tech.icon" width="24" height="24" class="mr-3 flex-shrink-0 text-yellow-400" />
                    <span class="font-medium text-sm whitespace-nowrap">{{ tech.name }}</span>
                </div>
            </div>

            <div ref="techCta" class="text-center mt-16 transform translate-y-10 opacity-0">
                <router-link to="/about"
                    class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-2 border-yellow-400 relative">
                    <Icon icon="mdi:circle-outline" class="w-5 h-5 mr-2 text-yellow-400" />
                    Voir le tableau
                </router-link>
            </div>
        </div>
    </section>
</template>
  
<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/vue';

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'TechnologiesSection',
    components: {
        Icon
    },
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
    },
    mounted() {
        // Create animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.$refs.techSection,
                start: 'top 80%'
            }
        });

        tl.to(this.$refs.techTitle, {
            opacity: 1,
            y: 0,
            duration: 0.6
        })
            .to(this.$refs.techDesc, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, '-=0.4')
            .to(this.$refs.techGrid, {
                opacity: 1,
                y: 0,
                duration: 0.8
            }, '-=0.4')
            .to(this.$refs.techCta, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, '-=0.4');

        // Tech items staggered animation
        gsap.to('.tech-item', {
            scrollTrigger: {
                trigger: this.$refs.techGrid,
                start: 'top 70%'
            },
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power1.out'
        });
    }
}
</script>
  
<style scoped>
/* Tech items specific styles */
.tech-item {
    transition: transform 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
    min-width: 0;
    /* Pour garantir que le texte peut être coupé si nécessaire */
}

.tech-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(247, 222, 61, 0.1);
}

/* Section Title Decoration */
.section-title-bar {
    width: 80px;
    height: 3px;
    background-color: #F7DE3D;
    position: relative;
    margin-top: 10px;
}

.section-title-bar::before {
    content: '';
    position: absolute;
    left: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    border-left: 3px solid #F7DE3D;
    border-top: 3px solid #F7DE3D;
}

.section-title-bar::after {
    content: '';
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    border-right: 3px solid #F7DE3D;
    border-top: 3px solid #F7DE3D;
}
</style>