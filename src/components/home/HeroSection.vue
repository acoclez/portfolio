<template>
    <section ref="heroSection" class="relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden">
        <!-- L decorations, anchored to the section so they never overlap the text -->
        <div class="hidden md:block absolute top-28 left-8 lg:left-16 l-decoration z-10"></div>
        <div class="hidden md:block absolute bottom-24 right-8 lg:right-16 l-decoration-reversed z-10"></div>

        <div class="max-w-6xl mx-auto flex flex-col items-center z-10 relative">

            <!-- "Bonjour, I'm Antoine," — the greeting cycles through the languages I speak or learn -->
            <!-- Two lines below lg, one line from lg up; the fluid size keeps each line whole on small phones -->
            <h1 ref="heroTitle" class="text-[clamp(2rem,11vw,3rem)] md:text-6xl xl:text-7xl leading-none font-bold mb-6 text-center opacity-0">
                <span class="block lg:inline">
                    <span ref="greetingBox" class="greeting-box" aria-hidden="true"><span ref="greetingWord"
                            class="greeting-word text-yellow-400" :lang="greeting.lang">{{ greeting.text }}</span></span><span
                        class="sr-only">Bonjour</span>,
                </span>
                <span class="whitespace-nowrap">{{ $t('hero.intro') }}</span>
            </h1>
            <p ref="heroSubtitle" class="text-2xl md:text-3xl text-gray-400 mb-10 text-center opacity-0">
                {{ $t('hero.role') }}</p>

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
                <a href="https://www.linkedin.com/in/acoclez/" target="_blank" aria-label="LinkedIn"
                    class="transform transition hover:scale-110 text-yellow-400">
                    <Icon icon="mdi:linkedin" width="40" height="40" />
                </a>
            </div>

            <!-- CTA Buttons -->
            <div ref="ctaButtons" class="flex flex-wrap justify-center gap-4 opacity-0">
                <router-link :to="$lp('/projects')"
                    class="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-none transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    {{ $t('hero.projects') }}
                </router-link>
                <a :href="$t('cv.href')" target="_blank"
                    class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-none border-2 border-yellow-400 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    {{ $t('cv.view') }}
                </a>
            </div>
        </div>

        <!-- Geometric Background Elements -->
        <div ref="bgElements" class="fade-bottom absolute top-0 left-0 w-full h-full pointer-events-none">
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

// Languages I speak or learn. Swedish and Danish both say "Hej": Danish uses "Goddag" here so the two
// don't look like a repeat, and Dutch "Hallo" is kept away from English "Hello"
const GREETINGS = [
    { text: 'Bonjour', lang: 'fr' },
    { text: 'Hello', lang: 'en' },
    { text: 'Привет', lang: 'ru' },
    { text: 'Hej', lang: 'sv' },
    { text: 'Goddag', lang: 'da' },
    { text: 'Hallo', lang: 'nl' }
];

const GREETING_PAUSE = 2.8; // seconds a greeting stays on screen

export default {
    name: 'HeroSection',
    components: {
        Icon
    },
    data() {
        return {
            greetingIndex: 0
        }
    },
    computed: {
        greeting() {
            return GREETINGS[this.greetingIndex];
        }
    },
    mounted() {
        const { animateHero, floatAround } = useAnimations();
        const shapes = Array.from(this.$refs.bgElements.children);
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
                if (!reducedMotion) {
                    floatAround(shapes);
                }
            }
        });

        // The greeting stays on "Bonjour" for visitors who asked for less motion
        if (!reducedMotion) {
            // Fetch the Cyrillic part of the font ahead of time so "Привет" doesn't flash in a fallback font
            document.fonts?.load('700 1em "Inter Variable"', GREETINGS.map(greeting => greeting.text).join(''));

            this.greetingCall = gsap.delayedCall(GREETING_PAUSE + 1, this.nextGreeting);
        }
    },
    beforeUnmount() {
        // The drift tweens repeat forever, so they have to be stopped explicitly
        gsap.killTweensOf(Array.from(this.$refs.bgElements.children));

        this.greetingCall?.kill();
        gsap.killTweensOf([this.$refs.greetingBox, this.$refs.greetingWord]);
    },
    methods: {
        // Slide the current greeting out, swap the word, then slide the next one in while the box
        // eases to its new width so the rest of the sentence glides instead of jumping
        nextGreeting() {
            const box = this.$refs.greetingBox;
            const word = this.$refs.greetingWord;

            if (!box || !word) return;

            gsap.set(box, { width: box.getBoundingClientRect().width });

            gsap.to(word, {
                yPercent: -40,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: async () => {
                    this.greetingIndex = (this.greetingIndex + 1) % GREETINGS.length;
                    await this.$nextTick();

                    if (!this.$refs.greetingBox) return; // the page was left meanwhile

                    gsap.to(box, {
                        width: word.getBoundingClientRect().width,
                        duration: 0.4,
                        ease: 'power2.inOut',
                        clearProps: 'width'
                    });
                    gsap.fromTo(word,
                        { yPercent: 40, opacity: 0 },
                        { yPercent: 0, opacity: 1, duration: 0.35, delay: 0.1, ease: 'power2.out' }
                    );

                    this.greetingCall = gsap.delayedCall(GREETING_PAUSE, this.nextGreeting);
                }
            });
        }
    }
}
</script>

<style scoped>
.greeting-box {
    display: inline-block;
    white-space: nowrap;
    text-align: center;
}

.greeting-word {
    display: inline-block;
}
</style>
