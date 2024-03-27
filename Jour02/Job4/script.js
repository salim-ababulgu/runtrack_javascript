// Fonction pour gérer l'événement de frappe de clavier
document.addEventListener("keydown", function(event) {
    var keylogger = document.getElementById("keylogger");
    var letter = event.key;

    // Ajouter la lettre au textarea
    if (document.activeElement !== keylogger) {
        keylogger.value += letter;
    } else {
        keylogger.value += letter;
    }
});
