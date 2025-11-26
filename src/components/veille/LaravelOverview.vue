<!-- src/components/veille/LaravelOverview.vue -->
<template>
    <div class="mt-16 bg-gray-800 rounded-lg overflow-hidden shadow-lg p-8">
        <h2 class="text-3xl font-bold mb-6">Ma veille technologique sur Laravel</h2>

        <div class="prose prose-invert max-w-none">
            <p class="mb-4">
                Laravel est un framework PHP open source créé en 2011 par Taylor Otwell. Il est devenu 
                le framework PHP le plus populaire grâce à son élégance, sa syntaxe expressive et son écosystème complet.
            </p>

            <h3 class="text-xl font-bold mt-8 mb-4">Pourquoi j'ai choisi Laravel pour ma veille</h3>

            <p class="mb-4">
                J'ai choisi Laravel car c'est un framework moderne, en constante évolution, avec une communauté 
                active et des outils professionnels. Sa philosophie "developer happiness" et son écosystème riche 
                en font un choix de premier plan pour le développement web moderne.
            </p>

            <h3 class="text-xl font-bold mt-8 mb-4">Les composantes principales de l'écosystème</h3>

            <ul class="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Laravel Framework</strong> : Le cœur du système avec routing, Eloquent ORM, et Blade templating</li>
                <li><strong>Laravel Livewire</strong> : Framework full-stack pour créer des interfaces dynamiques sans JavaScript</li>
                <li><strong>Laravel Reverb</strong> : Serveur WebSocket officiel pour les applications temps réel</li>
                <li><strong>Laravel Forge</strong> : Plateforme de déploiement et gestion de serveurs</li>
                <li><strong>Laravel Vapor</strong> : Déploiement serverless sur AWS avec auto-scaling</li>
                <li><strong>Laravel Octane</strong> : Supercharge les performances avec Swoole ou RoadRunner</li>
            </ul>

            <h3 class="text-xl font-bold mt-8 mb-4">Dernières tendances et évolutions</h3>

            <p class="mb-4">
                Laravel continue d'innover avec des fonctionnalités modernes :
            </p>

            <ul class="list-disc pl-6 space-y-2">
                <li>Structure d'application minimaliste avec Laravel 11</li>
                <li>Support WebSocket natif avec Reverb pour le temps réel</li>
                <li>File-based routing avec Folio inspiré de Next.js</li>
                <li>Amélioration continue des performances avec Octane</li>
                <li>Intégration native d'Alpine.js dans Livewire 3</li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'LaravelOverview'
}
</script>