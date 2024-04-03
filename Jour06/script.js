// ---------- Btn Rebootez le monde ----------
document.getElementById("rebootBtn").addEventListener("click", function() {
    // Tableau de citations Blade Runner
    var citations = [
      "Je pense, donc je suis.",
      "Le chemin de l'excès mène au palais de la sagesse.",
      "J'ai vu de bien des manières mourir des gens, peu importe de quelle manière je meurs, bien ou mal, ça a pas d'importance. Ce qui compte, c'est comment on vit.",
      "La vie ne mérite pas qu'on s'y accroche.",
      "Celui qui aime les spectres est condamné à devenir lui-même un spectre.",
      "Toutes ces choses seront perdues, dans le temps, comme des larmes sous la pluie."
    ];
  
    // Choix aléatoire d'une citation
    var citationAleatoire = citations[Math.floor(Math.random() * citations.length)];
  
    // Modification du texte du jumbotron
    document.querySelector(".jumbotron .lead").textContent = citationAleatoire;
  });



// Pagination 2
$(document).ready(function() {
    $('#example').DataTable({
      //disable sorting on last column
      "columnDefs": [
        { "orderable": false, "targets": 5 }
      ],
      language: {
        //customize pagination prev and next buttons: use arrows instead of words
        'paginate': {
          'previous': '<span class="fa fa-chevron-left"></span>',
          'next': '<span class="fa fa-chevron-right"></span>'
        },
        //customize number of elements to be displayed
        "lengthMenu": 'Display <select class="form-control input-sm">'+
        '<option value="10">10</option>'+
        '<option value="20">20</option>'+
        '<option value="30">30</option>'+
        '<option value="40">40</option>'+
        '<option value="50">50</option>'+
        '<option value="-1">All</option>'+
        '</select> results'
      }
    })  
} );


// ----- List Group Active -----
// Sélection de tous les éléments de la liste groupée
const listItems = document.querySelectorAll('.list-group-item');

// Fonction pour mettre à jour l'élément actif
function updateActiveItem(clickedItem) {
    // Supprimer la classe "active" de tous les éléments de la liste
    listItems.forEach(item => {
        item.classList.remove('active');
    });
    // Ajouter la classe "active" à l'élément cliqué
    clickedItem.classList.add('active');
}

// Écouteurs d'événements pour chaque élément de la liste
listItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien
        updateActiveItem(item);
    });
});



// ---------- Progress Bar ----------
var progressBarInner = document.getElementById("progressBarInner");
var decrementBtn = document.getElementById("decrementProgress");
var incrementBtn = document.getElementById("incrementProgress");

// Valeur initiale de la barre de progression
var progressValue = 95;

// Fonction pour mettre à jour la barre de progression
function updateProgressBar() {
  progressBarInner.style.width = progressValue + "%";
  progressBarInner.setAttribute("aria-valuenow", progressValue);
}

// Événement du clic sur le bouton de décrémentation
decrementBtn.addEventListener("click", function() {
  if (progressValue > 0) {
    progressValue -= 5; // Décrémentation de 5%
    updateProgressBar();
  }
});

// Événement du clic sur le bouton d'incrémentation
incrementBtn.addEventListener("click", function() {
  if (progressValue < 100) {
    progressValue += 5; // Incrémentation de 5%
    updateProgressBar();
  }
});


