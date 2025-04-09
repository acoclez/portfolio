<!-- src/components/home/ProjectsPreviewSection.vue -->
<template>
    <section ref="projectsSection" class="py-24 px-4 bg-black relative">
        <div class="max-w-6xl mx-auto">
            <div class="relative flex flex-col items-center mb-14">
                <h2 ref="projectsTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">
                    Projets</h2>
                <div class="section-title-bar"></div>
            </div>

            <p ref="projectsDesc"
                class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
                Projets sur lesquels j'ai pu collaborer
            </p>

            <div ref="projectCard" class="grid grid-cols-1 gap-10 transform translate-y-20 opacity-0">
                <div
                    class="bg-gray-900 overflow-hidden shadow-2xl border-l-4 border-yellow-400 transition-all duration-300 hover:shadow-yellow-900/20 hover:shadow-2xl">
                    <div class="flex flex-col md:flex-row relative">
                        <!-- L top left -->
                        <div class="absolute top-0 left-0 l-decoration-small"></div>

                        <!-- L bottom right reversed -->
                        <div class="absolute bottom-0 right-0 l-decoration-small-reversed"></div>

                        <div class="md:w-2/5 h-64 overflow-hidden">
                            <img src="/assets/img/projects/exemple.png" alt="Project Thumbnail"
                                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                        </div>
                        <div class="md:w-3/5 p-8">
                            <h3 class="text-2xl font-bold mb-4">Gestionnaire de bibliothèque SIO</h3>
                            <p class="text-gray-400 mb-6">Développement d'un site de gestion de bibliothèque avec Spring
                                Boot et
                                Angular</p>

                            <div class="flex flex-wrap gap-2 mb-6">
                                <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                                    <Icon icon="mdi:language-java" class="inline-block mr-1 text-yellow-400" width="16" />
                                    Spring Boot
                                </span>
                                <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                                    <Icon icon="mdi:angular" class="inline-block mr-1 text-yellow-400" width="16" />
                                    Angular
                                </span>
                                <span class="px-3 py-1 text-sm bg-gray-800 text-yellow-400 border-l-2 border-yellow-400">
                                    <Icon icon="mdi:database" class="inline-block mr-1 text-yellow-400" width="16" />
                                    MySQL
                                </span>
                            </div>

                            <a href="#"
                                class="inline-block px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition transform hover:-translate-y-1">
                                En savoir plus
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div ref="projectsCta" class="text-center mt-16 transform translate-y-10 opacity-0">
                <router-link to="/projects"
                    class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-2 border-yellow-400">
                    <Icon icon="mdi:circle-outline" class="w-5 h-5 mr-2 text-yellow-400" />
                    Voir plus de projets
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
    name: 'ProjectsPreviewSection',
    components: {
        Icon
    },
    mounted() {
        // Create animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.$refs.projectsSection,
                start: 'top 80%'
            }
        });

        tl.to(this.$refs.projectsTitle, {
            opacity: 1,
            y: 0,
            duration: 0.6
        })
            .to(this.$refs.projectsDesc, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, '-=0.4')
            .to(this.$refs.projectCard, {
                opacity: 1,
                y: 0,
                duration: 0.8
            }, '-=0.4')
            .to(this.$refs.projectsCta, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, '-=0.4');
    }
}
</script>
  
<style scoped>
/* L decorations for the corners */
.l-decoration-small {
    position: absolute;
    width: 30px;
    height: 30px;
}

.l-decoration-small::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #F7DE3D;
    left: 0;
    top: 0;
}

.l-decoration-small::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #F7DE3D;
    left: 0;
    top: 0;
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

/* Animation for the project cards */
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

.border-l-4.border-yellow-400 {
    animation: borderPulse 4s infinite;
}</style>