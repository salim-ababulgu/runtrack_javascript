/*
Créez une balise <button> et sélectionnez-la dans votre code JavaScript.

En cliquant sur le bouton, vous devrez faire apparaître le texte sur votre page
HTML :

“Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on
les construit, ensuite, on prie.”

Ensuite, créez un bouton qui servira à cacher tout l’élément HTML.
*/

// Attend que le document HTML soit entièrement chargé avant d'exécuter le code jQuery.
$(document).ready(function() {
    // Lorsque le bouton avec l'ID "btn-all-hide" est cliqué, exécute cette fonction.
    $("#btn-all-hide").click(function() {
        // Cache l'article avec l'ID "article".
        $("#article").hide();
    });

    // Lorsque le bouton avec l'ID "button" est cliqué, exécute cette fonction.
    $("#btn-all-show").click(function() {
        // Sélectionne l'élément avec l'ID "article" et alterne son affichage.
        $("#article").show();
    });
});
