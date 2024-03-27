//  Créez une balise <button> ayant comme id “button”
//  Lorsque l’on clique
//      un <article> contenant le texte suivant est ajouté au contenu de la page 
            //: “L'important n'est pas la chute, mais l'atterrissage.”
//  Si l'on clique à nouveau sur ce bouton
//      l’article disparaît
//  L’apparition / Disparition doit être gérée dans une fonction nommée “showhide()”


function showhide() {
    var article = document.getElementById("article");
    // Vérifie si l'article est actuellement visible ou caché
    if (article.style.display === "none") {
        // Si l'article est caché, le rendre visible
        article.style.display = "block";
    } else {
        // Sinon, le cacher
        article.style.display = "none";
    }
}














