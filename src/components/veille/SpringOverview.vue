<!-- src/components/veille/SpringOverview.vue -->
<template>
    <div class="mt-16 bg-gray-800 rounded-lg overflow-hidden shadow-lg p-8">
        <h2 class="text-3xl font-bold mb-6">Ma veille technologique sur Spring</h2>

        <div class="prose prose-invert max-w-none">
            <p class="mb-4">
                Spring est un framework Java open source qui simplifie le développement d'applications d'entreprise.
                Depuis sa première version en 2002, Spring est devenu l'un des frameworks les plus populaires
                pour le développement Java.
            </p>

            <h3 class="text-xl font-bold mt-8 mb-4">Pourquoi j'ai choisi Spring pour ma veille</h3>

            <p class="mb-4">
                J'ai choisi de réaliser ma veille technologique sur Spring car c'est un écosystème complet qui évolue
                constamment et qui est largement utilisé dans l'industrie. Sa popularité et sa robustesse en font
                un atout majeur pour un développeur Java.
            </p>

            <h3 class="text-xl font-bold mt-8 mb-4">Les principales composantes de Spring</h3>

            <ul class="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Spring Core</strong> : Le conteneur d'inversion de contrôle (IoC) qui est à la base du framework
                </li>
                <li><strong>Spring MVC</strong> : Un modèle MVC pour le développement web</li>
                <li><strong>Spring Boot</strong> : Facilite la création d'applications Spring autonomes et prêtes à la
                    production</li>
                <li><strong>Spring Data</strong> : Simplifie l'accès aux données et l'interaction avec les bases de données
                </li>
                <li><strong>Spring Security</strong> : Fournit une sécurité robuste et configurable pour les applications
                </li>
                <li><strong>Spring Cloud</strong> : Facilite le développement d'applications distribuées dans le cloud</li>
            </ul>

            <h3 class="text-xl font-bold mt-8 mb-4">Dernières tendances et évolutions</h3>

            <p class="mb-4">
                Spring continue d'évoluer pour répondre aux besoins des développeurs modernes. Voici quelques tendances
                récentes :
            </p>

            <ul class="list-disc pl-6 space-y-2">
                <li>Support amélioré pour les applications réactives</li>
                <li>Intégration renforcée avec Kubernetes et les environnements cloud-native</li>
                <li>Amélioration des performances et réduction de l'empreinte mémoire</li>
                <li>Support pour GraalVM et la compilation native</li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SpringOverview'
}
</script>