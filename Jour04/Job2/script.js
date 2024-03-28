function jsonValueKey(jsonString, key) {
    // Essaie de parser la chaîne JSON en objet JavaScript
    try {
        const data = JSON.parse(jsonString);
        // Vérifie si la clé existe dans l'objet
        if (key in data) {
            // Retourne la valeur associée à la clé
            return data[key];
        } else {
            // Si la clé n'existe pas, retourne une chaîne vide
            return '';
        }
    } catch (error) {
        // Si une erreur de parsing se produit, affiche un message d'erreur dans la console
        console.error('Erreur de parsing JSON :', error);
        // Retourne null en cas d'erreur
        return null;
    }
}

// Exemple d'utilisation de la fonction
const jsonString = '{"name": "La Plateforme_", "adress": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019"}';
const key = 'city';
const value = jsonValueKey(jsonString, key);
console.log('La valeur associée à la clé', key, 'est :', value);
