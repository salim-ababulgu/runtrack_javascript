// Définition du code Konami
const konamiCode = [
    'ArrowUp',  // ↑
    'ArrowUp',  // ↑ 
    'ArrowDown',  // ↓
    'ArrowDown',  // ↓
    'ArrowLeft',  // ←
    'ArrowRight',  // →
    'ArrowLeft',  //←
    'ArrowRight',  // →
    'b',  // B
    'a'  // A
  ];
  
  let konamiCodePosition = 0;
  
  // Écouteur d'événement pour détecter les touches du clavier
  document.addEventListener('keydown', function(event) {
    // Récupération de la touche pressée
    const key = event.key;
  
    // Vérification si la touche pressée correspond à la prochaine dans le code Konami
    if (key === konamiCode[konamiCodePosition]) {
      konamiCodePosition++;
  
      // Vérification si le code Konami a été entièrement entré
      if (konamiCodePosition === konamiCode.length) {
        // Exécution de la fonction pour styliser la page
        stylizePage();
  
        // Réinitialisation de la position du code Konami
        konamiCodePosition = 0;
      }
    } else {
      // Réinitialisation de la position du code Konami si la touche pressée est incorrecte
      konamiCodePosition = 0;
    }
  });
  
  // Fonction pour styliser la page avec les couleurs de La Plateforme_
  function stylizePage() {
    // Sélection de l'élément body
    const body = document.querySelector('body');
  
    // Modification des couleurs de fond et de texte
    body.style.backgroundColor = '#0062ff';
    body.style.color = '#ffffff';
  }
  