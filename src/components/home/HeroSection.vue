<template>
    <section ref="heroSection" class="relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden">
        <div class="max-w-6xl mx-auto flex flex-col items-center z-10 relative">
            <!-- L top left -->
            <div class="absolute top-20 left-20 md:top-25 md:left-24 l-decoration"></div>

            <!-- L bottom right reversed -->
            <div class="absolute bottom-20 right-20 md:bottom-24 md:right-24 l-decoration-reversed"></div>

            <h1 ref="heroTitle" class="text-5xl md:text-7xl font-bold mb-6 text-center opacity-0">Antoine Coclez</h1>
            <p ref="heroSubtitle" class="text-2xl md:text-3xl text-gray-400 mb-10 text-center opacity-0">
                Développeur Web</p>

            <!-- Social Links -->
            <div ref="socialLinks" class="flex justify-center space-x-6 mb-12 opacity-0">
                <a href="https://github.com/" target="_blank" class="transform transition hover:scale-110 text-yellow-400">
                    <Icon icon="mdi:github" width="40" height="40" />
                </a>
                <a href="https://gitlab.com/" target="_blank" class="transform transition hover:scale-110 text-yellow-400">
                    <Icon icon="mdi:gitlab" width="40" height="40" />
                </a>
                <a href="https://twitter.com/" target="_blank" class="transform transition hover:scale-110 text-yellow-400">
                    <Icon icon="mdi:twitter" width="40" height="40" />
                </a>
            </div>

            <!-- CTA Buttons -->
            <div ref="ctaButtons" class="flex flex-wrap justify-center gap-4 opacity-0">
                <router-link to="/projects"
                    class="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Voir mes projets
                </router-link>
                <a href="/assets/cv.pdf" target="_blank"
                    class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none border-2 border-yellow-400 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Télécharger mon CV
                </a>
            </div>
        </div>

        <!-- Geometric Background Elements -->
        <div ref="bgElements" class="absolute top-0 left-0 w-full h-full -z-5 pointer-events-auto">
            <div ref="square1"
                class="absolute top-0 right-0 w-40 h-40 md:w-80 md:h-80 border-8 border-yellow-400 opacity-20 transition-transform duration-1000">
            </div>
            <div ref="square2"
                class="absolute bottom-0 left-0 w-60 h-60 md:w-96 md:h-96 border-8 border-yellow-400 opacity-10 transition-transform duration-1000">
            </div>
            <div ref="square3"
                class="absolute top-1/4 left-1/4 w-20 h-20 bg-yellow-400 opacity-5 transition-transform duration-1000">
            </div>
            <div ref="square4"
                class="absolute bottom-1/3 right-1/3 w-32 h-32 bg-yellow-400 opacity-5 transition-transform duration-1000">
            </div>
            <!-- Gradient circles -->
            <div ref="circle1"
                class="absolute left-1/3 top-1/2 w-96 h-96 bg-yellow-400 opacity-5 rounded-full filter blur-3xl transition-transform duration-1000">
            </div>
            <div ref="circle2"
                class="absolute right-1/4 bottom-1/4 w-96 h-96 bg-gray-700 opacity-10 rounded-full filter blur-3xl transition-transform duration-1000">
            </div>
        </div>
    </section>
</template>
  
<script>
import { gsap } from 'gsap';
import { Icon } from '@iconify/vue';

export default {
    name: 'HeroSection',
    components: {
        Icon
    },
    mounted() {
        // Hero section animations
        gsap.to(this.$refs.heroTitle, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2
        });

        gsap.to(this.$refs.heroSubtitle, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.4
        });

        gsap.to(this.$refs.socialLinks, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.6
        });

        gsap.to(this.$refs.ctaButtons, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.8
        });

        // Background geometric elements initial animation
        gsap.from(this.$refs.bgElements.children, {
            x: 'random(-100, 100)',
            y: 'random(-100, 100)',
            rotation: 'random(-45, 45)',
            opacity: 0,
            duration: 1.5,
            delay: 0.2,
            stagger: 0.2
        });

        // Initialize interactive background behavior
        this.initInteractiveBackground();
    },
    methods: {
        initInteractiveBackground() {
            // Add references to background elements
            const elements = [
                { el: this.$refs.square1, factorX: 25, factorY: -15, rotation: 8 },
                { el: this.$refs.square2, factorX: -20, factorY: 18, rotation: -6 },
                { el: this.$refs.square3, factorX: 35, factorY: 25, rotation: 15 },
                { el: this.$refs.square4, factorX: -30, factorY: -22, rotation: -12 },
                { el: this.$refs.circle1, factorX: 40, factorY: -30, rotation: 5 },
                { el: this.$refs.circle2, factorX: -45, factorY: 35, rotation: -8 }
            ];

            // Throttle function to limit how often the event fires
            let ticking = false;

            // Add event listener for mouse movement
            window.addEventListener('mousemove', (e) => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        // Get mouse position
                        const mouseX = e.clientX;
                        const mouseY = e.clientY;

                        // Get window dimensions
                        const windowWidth = window.innerWidth;
                        const windowHeight = window.innerHeight;

                        // Normalized mouse position (-1 to 1)
                        const normalizedX = (mouseX / windowWidth) * 2 - 1;
                        const normalizedY = (mouseY / windowHeight) * 2 - 1;

                        // Animate each element
                        elements.forEach(item => {
                            if (!item.el) return; // Skip if element not found

                            // Calculate movement based on mouse position
                            const moveX = normalizedX * item.factorX;
                            const moveY = normalizedY * item.factorY;
                            const rotate = normalizedX * item.rotation;

                            // Animate with GSAP
                            gsap.to(item.el, {
                                x: moveX,
                                y: moveY,
                                rotation: rotate,
                                duration: 1.2,
                                ease: "power1.out",
                                overwrite: "auto"
                            });
                        });

                        ticking = false;
                    });

                    ticking = true;
                }
            });
        }
    }
}
</script>