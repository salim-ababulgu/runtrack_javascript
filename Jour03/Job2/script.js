// Tableau contenant les chemins vers les images de l'arc-en-ciel
const images = [
    "images/arc1.png",
    "images/arc2.png",
    "images/arc3.png",
    "images/arc4.png",
    "images/arc5.png",
    "images/arc6.png"
  ];
  
  // Sélecteur pour le conteneur des images
  const arcEnCielContainer = document.getElementById('arc-en-ciel');
  
  // Fonction pour mélanger les images
  function melangerImages() {
    // Mélanger le tableau d'images
    images.sort(() => Math.random() - 0.5);
    // Mettre à jour les images dans le DOM
    images.forEach((imagePath, index) => {
      const img = document.createElement('img');
      img.src = imagePath;
      img.setAttribute('draggable', 'true');
      img.setAttribute('data-index', index); // Ajouter un attribut pour garder la trace de l'index original
      arcEnCielContainer.appendChild(img);
    });
  }
  
  // Appeler la fonction pour mélanger les images au chargement de la page
  window.onload = melangerImages;
  
  // Fonction pour vérifier si l'arc-en-ciel est reconstitué dans le bon ordre
  function verifierArcEnCiel() {
    const imagesDansOrdre = Array.from(arcEnCielContainer.querySelectorAll('img')).map(img => img.src.split('/').pop());
    const imagesDansOrdreCorrect = imagesDansOrdre.join('') === "arc1.pngarc2.pngarc3.pngarc4.pngarc5.pngarc6.png";
    const messageElement = document.getElementById('message');
    if (imagesDansOrdreCorrect) {
      messageElement.textContent = "Vous avez gagné";
      messageElement.style.color = "green";
    } else {
      messageElement.textContent = "Vous avez perdu";
      messageElement.style.color = "red";
    }
  }
  
  // Fonction pour valider les images et afficher les messages
  function validerImages() {
    verifierArcEnCiel();
    // Afficher le paragraphe contenant les messages
    document.getElementById('message').style.display = 'block';
  }
  
  // Associer la fonction validerImages à l'événement clic sur le bouton de validation
  document.getElementById('valider').addEventListener('click', function() {
    validerImages();
  });
  
  // Écouter les événements de drag and drop pour réorganiser les images
  arcEnCielContainer.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.getAttribute('data-index'));
  });
  
  arcEnCielContainer.addEventListener('dragover', e => {
    e.preventDefault();
  });
  
  arcEnCielContainer.addEventListener('drop', e => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData('text/plain');
    const dropIndex = e.target.getAttribute('data-index');
    if (dragIndex !== dropIndex) {
      const draggedImg = arcEnCielContainer.querySelector(`[data-index="${dragIndex}"]`);
      const droppedImg = e.target.closest('img');
      arcEnCielContainer.insertBefore(draggedImg, droppedImg);
      verifierArcEnCiel(); // Vérifier si l'arc-en-ciel est reconstitué après chaque réorganisation
    }
  });
  
  // Écouter le clic sur le bouton "Mélanger les images"
  document.getElementById('melanger').addEventListener('click', () => {
    arcEnCielContainer.innerHTML = ''; // Effacer le contenu actuel du conteneur
    melangerImages(); // Mélanger les images à nouveau
    document.getElementById('message').textContent = ''; // Réinitialiser le message de victoire/défaite
    // Afficher le bouton de validation
    document.getElementById('valider').style.display = 'inline-block';
  });
  