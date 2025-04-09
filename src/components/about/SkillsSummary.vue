<!-- src/components/about/SkillsSummary.vue -->
<template>
    <div>
        <h2 class="text-3xl font-bold text-center mb-10">Tableau de synthèse de mes compétences</h2>
        <div class="w-full h-screen bg-gray-800 rounded-lg overflow-hidden">
            <object class="w-full h-full" data="/assets/synthese_competences.pdf" type="application/pdf">
                <p class="p-8 text-center">
                    Votre navigateur ne supporte pas l'affichage des PDF.
                    <a href="/assets/synthese_competences.pdf" class="text-blue-400 underline" target="_blank">Cliquez ici
                        pour télécharger</a>
                </p>
            </object>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SkillsSummary'
}
</script>