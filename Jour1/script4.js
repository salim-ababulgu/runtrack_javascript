// Déclarez une fonction “bisextile”
    // Qui prend en paramètre une variable “année”
// Déclarer unue variable “année”
    // Si l’année est bissextile
        // la fonction retourne true
    // sinon
        // elle retourne false



// Définition de la fonction "bisextile" prenant en paramètre une année
function bisextile(annee) {
    // Vérifie si l'année est divisible par 4 et non divisible par 100, ou si elle est divisible par 400
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        // Si la condition est vraie, retourne true (c'est une année bissextile)
        return true;
    } else {
        // Si la condition est fausse, retourne false (ce n'est pas une année bissextile)
        return false;
    }
}

// Utilisation de la fonction :
// Appel de la fonction "bisextile" en entrant le parametre avec l'année 2024
let annee = 2025;
//  Et affiche le résultat en entrant la function puis son parametre en parenthese
console.log(bisextile(annee)); // Affichera true car 2024 est une année bissextile

        

















