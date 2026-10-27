<!-- src/components/home/ProjectsPreviewSection.vue -->
<template>
    <section ref="projectsSection" class="py-24 px-4 relative">
        <div class="max-w-6xl mx-auto relative">
            <!-- L top left -->
            <div class="absolute top-0 left-0 l-decoration"></div>

            <!-- L bottom right reversed -->
            <div class="absolute bottom-0 right-0 l-decoration-reversed"></div>

            <div class="relative flex flex-col items-center mb-14">
                <h2 ref="projectsTitle" class="text-3xl font-bold text-center mb-6 transform translate-y-10 opacity-0">
                    Projets</h2>
            </div>

            <p ref="projectsDesc"
                class="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto transform translate-y-10 opacity-0">
                Projets sur lesquels j'ai pu collaborer
            </p>

            <div ref="projectCard" class="grid grid-cols-1 md:grid-cols-2 gap-8 transform translate-y-20 opacity-0">
                <ProjectCard v-for="project in featuredProjects" :key="project.title" :project="project" />
            </div>

            <div ref="projectsCta" class="text-center mt-16 transform translate-y-10 opacity-0">
                <router-link to="/projects"
                    class="inline-flex items-center px-6 py-3 rounded-none bg-gray-800 hover:bg-gray-700 text-white font-bold transition border-b-2 border-yellow-400">
                    <Icon icon="mdi:circle-outline" class="w-5 h-5 mr-2 text-yellow-400" />
                    Voir tous les projets
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import { Icon } from '@iconify/vue';
import ProjectCard from '@/components/projects/ProjectCard.vue';
import { projects } from '@/data/projects';
import { useAnimations } from '@/composables/useAnimations';

export default {
    name: 'ProjectsPreviewSection',
    components: {
        Icon,
        ProjectCard
    },
    data() {
        return {
            featuredProjects: projects.filter(project => project.featured)
        }
    },
    mounted() {
        const { animateSection } = useAnimations();

        animateSection(this.$refs.projectsSection, {
            title: this.$refs.projectsTitle,
            description: this.$refs.projectsDesc,
            content: this.$refs.projectCard,
            cta: this.$refs.projectsCta
        });
    }
}
</script>
