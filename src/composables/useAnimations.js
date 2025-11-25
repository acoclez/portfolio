// src/composables/useAnimations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Composable for reusable GSAP animations
 * Provides common animation patterns used throughout the app
 */
export function useAnimations() {
    /**
     * Animate hero section elements (title and description)
     * @param {HTMLElement} titleRef - Title element reference
     * @param {HTMLElement} descRef - Description element reference
     * @param {Object} options - Animation options
     * @returns {gsap.core.Timeline}
     */
    const animateHero = (titleRef, descRef, options = {}) => {
        const defaults = {
            titleDelay: 0.2,
            descDelay: 0.4,
            duration: 0.8,
            stagger: 0.2
        };

        const config = { ...defaults, ...options };
        const timeline = gsap.timeline();

        timeline
            .to(titleRef, {
                opacity: 1,
                y: 0,
                duration: config.duration,
                delay: config.titleDelay
            })
            .to(descRef, {
                opacity: 1,
                y: 0,
                duration: config.duration
            }, `-=${config.duration - config.stagger}`);

        return timeline;
    };

    /**
     * Animate elements on scroll using ScrollTrigger
     * @param {HTMLElement|HTMLElement[]} targets - Elements to animate
     * @param {HTMLElement} triggerElement - Element that triggers the animation
     * @param {Object} options - Animation options
     * @returns {gsap.core.Tween}
     */
    const animateOnScroll = (targets, triggerElement, options = {}) => {
        const defaults = {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            start: 'top 80%',
            ease: 'power2.out'
        };

        const config = { ...defaults, ...options };

        // Extract ScrollTrigger config
        const scrollConfig = {
            trigger: triggerElement,
            start: config.start,
            ...(options.scrollTrigger || {})
        };

        // Remove ScrollTrigger-specific properties from animation config
        const animConfig = { ...config };
        delete animConfig.start;
        delete animConfig.scrollTrigger;

        return gsap.to(targets, {
            ...animConfig,
            scrollTrigger: scrollConfig
        });
    };

    /**
     * Animate cards with staggered effect
     * @param {HTMLElement[]} cards - Card elements to animate
     * @param {HTMLElement} triggerElement - Element that triggers the animation
     * @param {Object} options - Animation options
     * @returns {gsap.core.Tween}
     */
    const animateCards = (cards, triggerElement, options = {}) => {
        const defaults = {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            start: 'top 80%'
        };

        const config = { ...defaults, ...options };

        return gsap.to(cards, {
            scrollTrigger: {
                trigger: triggerElement,
                start: config.start
            },
            opacity: config.opacity,
            y: config.y,
            stagger: config.stagger,
            duration: config.duration
        });
    };

    /**
     * Animate social links with bounce effect
     * @param {HTMLElement[]} links - Social link elements
     * @param {Object} options - Animation options
     * @returns {gsap.core.Tween}
     */
    const animateSocialLinks = (links, options = {}) => {
        const defaults = {
            scale: 0,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            delay: 0.3,
            ease: "back.out(1.7)"
        };

        const config = { ...defaults, ...options };

        return gsap.from(links, config);
    };

    /**
     * Fade in elements from specified direction
     * @param {HTMLElement|HTMLElement[]} elements - Elements to animate
     * @param {Object} options - Animation options
     * @returns {gsap.core.Tween}
     */
    const fadeIn = (elements, options = {}) => {
        const defaults = {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1,
            delay: 0
        };

        const config = { ...defaults, ...options };

        return gsap.from(elements, config);
    };

    /**
     * Slide in elements from left or right
     * @param {HTMLElement|HTMLElement[]} elements - Elements to animate
     * @param {string} direction - 'left' or 'right'
     * @param {Object} options - Animation options
     * @returns {gsap.core.Tween}
     */
    const slideIn = (elements, direction = 'left', options = {}) => {
        const defaults = {
            opacity: 0,
            x: direction === 'left' ? -20 : 20,
            duration: 0.5,
            stagger: 0.1,
            delay: 0
        };

        const config = { ...defaults, ...options };

        return gsap.from(elements, config);
    };

    /**
     * Create a sequential timeline for complex animations
     * @param {Array} animations - Array of animation configs [{targets, props, label}]
     * @param {Object} options - Timeline options
     * @returns {gsap.core.Timeline}
     */
    const createTimeline = (animations, options = {}) => {
        const timeline = gsap.timeline(options);

        animations.forEach(({ targets, props, label, position }) => {
            timeline.to(targets, props, position || undefined);
            if (label) timeline.addLabel(label);
        });

        return timeline;
    };

    /**
     * Animate entrance of navigation island
     * @param {HTMLElement} navElement - Navigation element
     * @param {Object} options - Animation options
     * @returns {gsap.core.Tween}
     */
    const animateNavIsland = (navElement, options = {}) => {
        const defaults = {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        };

        const config = { ...defaults, ...options };

        return gsap.from(navElement, config);
    };

    /**
     * Animate form inputs with stagger
     * @param {HTMLElement[]} inputs - Form input elements
     * @param {Object} options - Animation options
     * @returns {gsap.core.Tween}
     */
    const animateFormInputs = (inputs, options = {}) => {
        const defaults = {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            delay: 0.3
        };

        const config = { ...defaults, ...options };

        return gsap.from(inputs, config);
    };

    /**
     * Parallax effect for background elements
     * @param {HTMLElement} element - Element to animate
     * @param {number} speed - Speed multiplier (default 0.5)
     * @returns {void}
     */
    const parallaxScroll = (element, speed = 0.5) => {
        gsap.to(element, {
            y: () => window.scrollY * speed,
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    };

    /**
     * Interactive mouse move effect for background elements
     * @param {HTMLElement[]} elements - Elements to animate
     * @param {Array<Object>} configs - Config for each element [{factorX, factorY, rotation}]
     * @returns {Function} Cleanup function
     */
    const mouseParallax = (elements, configs) => {
        let ticking = false;

        const handleMouseMove = (e) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const mouseX = e.clientX;
                    const mouseY = e.clientY;
                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;

                    const normalizedX = (mouseX / windowWidth) * 2 - 1;
                    const normalizedY = (mouseY / windowHeight) * 2 - 1;

                    elements.forEach((element, index) => {
                        if (!element) return;

                        const config = configs[index] || { factorX: 20, factorY: 20, rotation: 0 };
                        const moveX = normalizedX * config.factorX;
                        const moveY = normalizedY * config.factorY;
                        const rotate = normalizedX * (config.rotation || 0);

                        gsap.to(element, {
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
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Return cleanup function
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    };

    /**
     * Stagger reveal with different timing for odd/even items
     * @param {HTMLElement[]} items - Items to animate
     * @param {Object} options - Animation options
     * @returns {gsap.core.Tween}
     */
    const staggerReveal = (items, options = {}) => {
        const defaults = {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: {
                each: 0.1,
                from: "start"
            }
        };

        const config = { ...defaults, ...options };

        return gsap.from(items, config);
    };

    return {
        // Basic animations
        animateHero,
        animateOnScroll,
        animateCards,
        animateSocialLinks,
        fadeIn,
        slideIn,

        // Complex animations
        createTimeline,
        animateNavIsland,
        animateFormInputs,
        staggerReveal,

        // Interactive effects
        parallaxScroll,
        mouseParallax
    };
}