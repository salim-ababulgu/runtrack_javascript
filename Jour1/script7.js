// Déclare une fonction “jourTravaille”
//  elle prend une parmètre 'date' au format Date
    //  Si la date correspond à un jour férié de l’année 2024
        // Sa affiche “Le jour mois année est un jour férié”
    //Si elle correspond à un samedi ou un dimanche
        // le message affiché est “Non, jour mois année est un week-end”
    // sinon
        // afficher “Oui, jour mois année est un jour travaillé”
// ou jour, mois et année correspond aux paramètres passés à la fonction.


function jourTravaille(date) {
    // Récupérer le jour de la semaine (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi)
    const jourSemaine = date.getDay();

    // Récupérer le jour, le mois et l'année de la date
    const jour = date.getDate();
    const mois = date.getMonth() + 1; // Les mois commencent à partir de 0
    const annee = date.getFullYear();

    // Tableau des jours fériés de l'année 2024
    const joursFeries = [
        "2024-01-01", // Jour de l'an
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du Travail
        "2024-05-08", // Victoire 1945
        "2024-05-30", // Ascension
        "2024-06-09", // Pentecôte
        "2024-07-14", // Fête nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice
        "2024-12-25"  // Noël
    ];

    // Formater la date pour correspondre au format dans le tableau des jours fériés
    const dateFormatee = `${annee}-${mois < 10 ? '0' + mois : mois}-${jour < 10 ? '0' + jour : jour}`;

    // Vérifier si la date est un jour férié
    if (joursFeries.includes(dateFormatee)) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié.`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, le ${jour}/${mois}/${annee} est un week-end.`);
    } else {
        console.log(`Oui, le ${jour}/${mois}/${annee} est un jour travaillé.`);
    }
}

// Exemple d'utilisation de la fonction avec une date spécifique
const maDate = new Date(2024, 3, 1); // 1er avril 2024
jourTravaille(maDate);
