<template>
    <section ref="heroSection" class="relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden">
        <div class="max-w-6xl mx-auto flex flex-col items-center z-10 relative">
            <!-- L top left -->
            <div class="absolute top-20 left-20 md:left-24 l-decoration"></div>

            <!-- L bottom right reversed -->
            <div class="absolute bottom-20 right-20 md:bottom-24 md:right-24 l-decoration-reversed"></div>

            <h1 ref="heroTitle" class="text-5xl md:text-7xl font-bold mb-6 text-center opacity-0">Antoine Coclez</h1>
            <p ref="heroSubtitle" class="text-2xl md:text-3xl text-gray-400 mb-10 text-center opacity-0">
                Développeur Web</p>

            <!-- Social Links -->
            <div ref="socialLinks" class="flex justify-center space-x-6 mb-12 opacity-0">
                <a href="https://github.com/acoclez" target="_blank" aria-label="GitHub"
                    class="transform transition hover:scale-110 text-yellow-400">
                    <Icon icon="mdi:github" width="40" height="40" />
                </a>
                <a href="https://gitlab.com/ACoclez" target="_blank" aria-label="GitLab"
                    class="transform transition hover:scale-110 text-yellow-400">
                    <Icon icon="mdi:gitlab" width="40" height="40" />
                </a>
                <a href="https://www.linkedin.com/in/antoine-coclez-3a6833304/" target="_blank" aria-label="LinkedIn"
                    class="transform transition hover:scale-110 text-yellow-400">
                    <Icon icon="mdi:linkedin" width="40" height="40" />
                </a>
            </div>

            <!-- CTA Buttons -->
            <div ref="ctaButtons" class="flex flex-wrap justify-center gap-4 opacity-0">
                <router-link to="/projects"
                    class="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Voir mes projets
                </router-link>
                <a href="/assets/CV_AC.pdf" target="_blank"
                    class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none border-2 border-yellow-400 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Voir mon CV
                </a>
            </div>
        </div>

        <!-- Geometric Background Elements -->
        <div ref="bgElements" class="absolute top-0 left-0 w-full h-full pointer-events-auto">
            <div ref="square1"
                class="absolute top-0 right-0 w-40 h-40 md:w-80 md:h-80 border-8 border-yellow-400 opacity-20">
            </div>
            <div ref="square2"
                class="absolute bottom-0 left-0 w-60 h-60 md:w-96 md:h-96 border-8 border-yellow-400 opacity-10">
            </div>
            <div ref="square3"
                class="absolute top-1/4 left-1/4 w-20 h-20 bg-yellow-400 opacity-5">
            </div>
            <div ref="square4"
                class="absolute bottom-1/3 right-1/3 w-32 h-32 bg-yellow-400 opacity-5">
            </div>
            <!-- Gradient circles -->
            <div ref="circle1"
                class="absolute left-1/3 top-1/2 w-96 h-96 bg-yellow-400 opacity-5 rounded-full filter blur-3xl">
            </div>
            <div ref="circle2"
                class="absolute right-1/4 bottom-1/4 w-96 h-96 bg-gray-700 opacity-10 rounded-full filter blur-3xl">
            </div>
        </div>
    </section>
</template>
  
<script>
import { gsap } from 'gsap';
import { Icon } from '@iconify/vue';
import { useAnimations } from '@/composables/useAnimations';

export default {
    name: 'HeroSection',
    components: {
        Icon
    },
    mounted() {
        const { animateHero, floatAround } = useAnimations();
        const shapes = Array.from(this.$refs.bgElements.children);

        // Hero section animations
        animateHero(
            [this.$refs.heroTitle, this.$refs.heroSubtitle, this.$refs.socialLinks, this.$refs.ctaButtons],
            { duration: 1 }
        );

        // Background geometric elements initial animation, then they keep drifting on their own
        gsap.from(shapes, {
            x: 'random(-100, 100)',
            y: 'random(-100, 100)',
            rotation: 'random(-45, 45)',
            opacity: 0,
            duration: 1.5,
            delay: 0.2,
            stagger: 0.2,
            onComplete: () => {
                if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    floatAround(shapes);
                }
            }
        });
    },
    beforeUnmount() {
        // The drift tweens repeat forever, so they have to be stopped explicitly
        gsap.killTweensOf(Array.from(this.$refs.bgElements.children));
    }
}
</script>