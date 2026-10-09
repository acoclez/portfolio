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
     * Reveal hero elements one after the other on page load
     * @param {HTMLElement[]} elements - Elements to reveal, in order
     * @param {Object} options - Tween options
     * @returns {gsap.core.Tween}
     */
    const animateHero = (elements, options = {}) => {
        return gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            stagger: 0.2,
            ...options
        });
    };

    /**
     * Reveal elements when a trigger element scrolls into view
     * @param {string|HTMLElement|HTMLElement[]} targets - Elements to reveal
     * @param {HTMLElement} triggerElement - Element that triggers the animation
     * @param {Object} options - Tween options, plus "start" for the ScrollTrigger
     * @returns {gsap.core.Tween}
     */
    const animateOnScroll = (targets, triggerElement, options = {}) => {
        const { start = 'top 80%', ...tweenOptions } = options;

        return gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ...tweenOptions,
            scrollTrigger: {
                trigger: triggerElement,
                start
            }
        });
    };

    /**
     * Reveal a section's title, description, content and optional CTA in sequence
     * @param {HTMLElement} triggerElement - Element that triggers the animation
     * @param {Object} elements - { title, description, content, cta }
     * @returns {gsap.core.Timeline}
     */
    const animateSection = (triggerElement, { title, description, content, cta }) => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: 'top 80%'
            }
        });

        timeline
            .to(title, { opacity: 1, y: 0, duration: 0.6 })
            .to(description, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
            .to(content, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');

        if (cta) {
            timeline.to(cta, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
        }

        return timeline;
    };

    /**
     * Make elements drift slowly and endlessly around their position
     * @param {HTMLElement[]} elements - Elements to animate
     * @param {Object} options - { distance (px), rotation (deg), minDuration, maxDuration (s) }
     * @returns {gsap.core.Tween[]} One endless tween per element, to kill on unmount
     */
    const floatAround = (elements, options = {}) => {
        const { distance = 40, rotation = 10, minDuration = 8, maxDuration = 14 } = options;

        return elements.filter(Boolean).map((element) => gsap.to(element, {
            x: `random(-${distance}, ${distance})`,
            y: `random(-${distance}, ${distance})`,
            rotation: `random(-${rotation}, ${rotation})`,
            duration: `random(${minDuration}, ${maxDuration})`,
            ease: "sine.inOut",
            repeat: -1,
            // Pick a new random destination each time one is reached
            repeatRefresh: true
        }));
    };

    return {
        animateHero,
        animateOnScroll,
        animateSection,
        floatAround
    };
}
