// Attache un événement de clic au bouton ayant l'ID "button"
document.getElementById('button').addEventListener('click', function() {
    // Démarre une requête Fetch pour récupérer le contenu du fichier 'expression.txt'
    fetch('expression.txt')
        // Une fois que la réponse est reçue...
        .then(response => {
            // Vérifie si la réponse est "ok" (c'est-à-dire si le fichier a été chargé avec succès)
            if (!response.ok) {
                // Si la réponse n'est pas "ok", lance une erreur avec un message approprié
                throw new Error('Erreur de chargement du fichier expression.txt');
            }
            // Si la réponse est "ok", retourne le contenu du fichier sous forme de texte
            return response.text();
        })
        // Une fois que le contenu du fichier est disponible...
        .then(data => {
            // Met le contenu du fichier dans le paragraphe ayant l'ID "expression"
            document.getElementById('expression').innerText = data;
        })
        // Gère les erreurs potentielles qui pourraient survenir lors du chargement du fichier ou de la récupération du contenu
        .catch(error => {
            // Affiche l'erreur dans la console du navigateur
            console.error('Une erreur est survenue:', error);
        });
});
