<template>
    <section class="py-16 px-4 bg-background-light rounded-lg my-16">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Prêt à me faire confiance pour votre projet ?</h2>
        <p class="text-text-secondary mb-8 md:text-lg">
          Contactez moi dès maintenant pour discuter de vos objectifs.
        </p>
        
        <!-- Wave SVG divider -->
        <div class="w-full max-w-xs mx-auto mb-8">
          <img 
            src="/assets/img/icons/wave.svg" 
            alt="Wave Separator" 
            class="w-full" 
          />
        </div>
        
        <router-link 
          to="/contact" 
          class="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-full transition-standard font-medium"
        >
          <img 
            src="/assets/img/icons/hand.svg" 
            alt="Contact Me Icon" 
            class="w-5 h-5"
          />
          Me Contacter
        </router-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CallToAction'
  }
  </script>