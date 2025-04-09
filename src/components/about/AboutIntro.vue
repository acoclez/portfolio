<!-- src/components/about/AboutIntro.vue -->
<template>
    <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- Profile Image - Uncomment when you have an image -->
        <!-- <img class="w-64 h-64 rounded-full object-cover" src="/assets/img/avatars/your-photo.jpg" alt="Antoine Coclez" /> -->

        <div>
            <h2 class="text-3xl font-bold mb-6">Antoine Coclez</h2>
            <div class="text-gray-300 space-y-4">
                <p>
                    Bonjour, je suis Antoine Coclez, jeune développeur informatique
                    de 20 ans basé à Bordeaux. Avec deux ans d'expérience en tant
                    que développeur logiciel, je suis motivé à travailler sur
                    des solutions logicielles dynamiques et innovantes.
                </p>
                <p>
                    Explorez mon portfolio pour mieux me connaître et n'hésitez
                    pas à me contacter afin de discuter ensemble d'éventuelles collaborations.
                </p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'AboutIntro'
}
</script>