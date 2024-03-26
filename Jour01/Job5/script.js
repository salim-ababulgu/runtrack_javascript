// Déclarez une fonction “afficherJoursSemaines”
    // Cette fonction ne prend pas de paramètre
// Déclarer un tableau de strings “joursSemaines”
    // qui contient l’ensemble des jours de la semaine du lundi --> dimanche
// Déclarer une boucle for
    // affichez un par un ces jours




// Déclaration de la fonction "afficherJoursSemaines" qui ne prend rien en paramètre
function afficherJoursSemaines() {
    // Déclarer un tableau de strings “joursSemaines” avec tout les jours de la semaine
    const joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedis", "Dimanche"];

    // Boucle à travers le tableau "joursSemaines"
    for (let i = 0; i < joursSemaines.length; i++) {
        // Affiche chaque jour de la semaine dans la console
        console.log(joursSemaines[i]);
    }
}

// Appel de la fonction "afficherJoursSemaines" pour afficher les jours de la semaine
afficherJoursSemaines();
