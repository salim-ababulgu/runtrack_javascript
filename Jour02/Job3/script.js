// Fonction pour incrémenter le compteur
function addOne() {
    var compteur = document.getElementById("compteur");
    compteur.textContent = parseInt(compteur.textContent) + 1;
}

// Associer la fonction à l'événement clic du bouton
document.getElementById("button").addEventListener("click", addOne);
