//  Créez un <article> ayant comme id “citation”
//  qui contient le texte suivant : "La vie a beaucoup plus d’imagination que nous”
//  Créez un <button> ayant comme id “button”
//  Lorsque l’on clique sur le bouton, récupérez le contenu de l’élément ayant comme id “citation”
//  affichez le contenu dans la console de développement
//  La fonction de récupération et d’affichage doit se nommer “citation()”

    // Récupération de l'élément bouton par son ID
    var button = document.getElementById("button");

    // Ajout d'un écouteur d'événement pour le clic sur le bouton
    button.addEventListener("click", citation);

    function citation() {
      // Récupération de l'élément ayant l'ID "citation"
      var citationElement = document.getElementById("citation");
      
      // Vérification si l'élément existe
      if (citationElement) {
        // Récupération du contenu de l'élément
        var citationText = citationElement.textContent;
        
        // Affichage du contenu dans la console
        console.log(citationText);
      } else {
        console.log("L'élément avec l'ID 'citation' n'existe pas.");
      }
    }