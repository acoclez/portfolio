<!-- src/components/shared/BaseCard.vue -->
<template>
  <div 
    :class="cardClasses"
    class="relative overflow-hidden transition-all duration-300"
  >
    <!-- L-decorations -->
    <div 
      v-if="showDecoration && hasDecoration('top-left')"
      :class="decorationSize === 'small' ? 'l-decoration-small' : 'l-decoration'"
      class="absolute top-0 left-0"
    ></div>
    
    <div 
      v-if="showDecoration && hasDecoration('top-right')"
      :class="decorationSize === 'small' ? 'l-decoration-small-reversed top-right' : 'l-decoration-reversed'"
      class="absolute top-0 right-0"
    ></div>
    
    <div 
      v-if="showDecoration && hasDecoration('bottom-left')"
      :class="decorationSize === 'small' ? 'l-decoration-small' : 'l-decoration'"
      class="absolute bottom-0 left-0"
    ></div>
    
    <div 
      v-if="showDecoration && hasDecoration('bottom-right')"
      :class="decorationSize === 'small' ? 'l-decoration-small-reversed' : 'l-decoration-reversed'"
      class="absolute bottom-0 right-0"
    ></div>

    <!-- Content slot -->
    <div :class="padding">
      <slot />
    </div>

    <!-- Optional footer slot -->
    <div v-if="$slots.footer" :class="footerClass">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    /**
     * Card variant (affects background and styling)
     * @values primary, secondary, glass, transparent
     */
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'glass', 'transparent'].includes(value)
    },
    
    /**
     * Border position and width
     * @values none, left, top, right, bottom, all, left-thick, top-thick
     */
    border: {
      type: String,
      default: 'left-thick',
      validator: (value) => [
        'none', 'left', 'top', 'right', 'bottom', 'all',
        'left-thick', 'top-thick', 'right-thick', 'bottom-thick'
      ].includes(value)
    },
    
    /**
     * Border radius
     * @values none, sm, md, lg, full
     */
    rounded: {
      type: String,
      default: 'none',
      validator: (value) => ['none', 'sm', 'md', 'lg', 'full'].includes(value)
    },
    
    /**
     * Padding inside the card
     */
    padding: {
      type: String,
      default: 'p-6 md:p-8'
    },
    
    /**
     * Shadow intensity
     * @values none, sm, md, lg, xl, accent
     */
    shadow: {
      type: String,
      default: 'xl',
      validator: (value) => ['none', 'sm', 'md', 'lg', 'xl', 'accent'].includes(value)
    },
    
    /**
     * Show L-decorations
     */
    showDecoration: {
      type: Boolean,
      default: false
    },
    
    /**
     * Which decorations to show
     * @example ['top-left', 'bottom-right']
     */
    decorations: {
      type: Array,
      default: () => ['bottom-right']
    },
    
    /**
     * Size of decorations
     * @values small, large
     */
    decorationSize: {
      type: String,
      default: 'small',
      validator: (value) => ['small', 'large'].includes(value)
    },
    
    /**
     * Enable hover effects
     */
    hoverable: {
      type: Boolean,
      default: false
    },
    
    /**
     * Make card clickable (adds cursor pointer)
     */
    clickable: {
      type: Boolean,
      default: false
    },
    
    /**
     * Additional CSS classes
     */
    customClass: {
      type: String,
      default: ''
    },
    
    /**
     * Footer padding class
     */
    footerClass: {
      type: String,
      default: 'px-6 pb-6 md:px-8 md:pb-8 pt-0'
    }
  },
  
  computed: {
    cardClasses() {
      return [
        // Base background
        this.variantClass,
        
        // Border
        this.borderClass,
        
        // Rounded corners
        this.roundedClass,
        
        // Shadow
        this.shadowClass,
        
        // Hover effects
        this.hoverable && 'hover:shadow-yellow-900/20 hover:shadow-2xl',
        
        // Clickable
        this.clickable && 'cursor-pointer',
        
        // Custom classes
        this.customClass
      ].filter(Boolean).join(' ');
    },
    
    variantClass() {
      const variants = {
        primary: 'bg-gray-900',
        secondary: 'bg-gray-800',
        glass: 'glass',
        transparent: 'bg-transparent'
      };
      return variants[this.variant];
    },
    
    borderClass() {
      if (this.border === 'none') return '';
      
      const borders = {
        left: 'border-l border-yellow-400',
        top: 'border-t border-yellow-400',
        right: 'border-r border-yellow-400',
        bottom: 'border-b border-yellow-400',
        all: 'border border-yellow-400',
        'left-thick': 'border-l-4 border-yellow-400',
        'top-thick': 'border-t-4 border-yellow-400',
        'right-thick': 'border-r-4 border-yellow-400',
        'bottom-thick': 'border-b-4 border-yellow-400'
      };
      
      return borders[this.border];
    },
    
    roundedClass() {
      const rounded = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full'
      };
      return rounded[this.rounded];
    },
    
    shadowClass() {
      if (this.shadow === 'none') return '';
      
      const shadows = {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
        accent: 'shadow-xl shadow-yellow-900/10'
      };
      
      return shadows[this.shadow];
    }
  },
  
  methods: {
    hasDecoration(position) {
      return this.decorations.includes(position);
    }
  }
}
</script>

<style scoped>
/* Glass effect */
.glass {
  background: rgba(17, 17, 17, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>