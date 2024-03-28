$(document).ready(function() {
    const images = [
        "./images/logo1.jpg",
        "images/logo2.jpg",
        "images/logo3.jpg",
        "images/logo4.jpg",
        "images/logo5.jpg",
        "images/logo6.jpg",
        "images/logo7.jpg",
        "images/logo8.jpg"
    ];

    const gridSize = 3; // Taille de la grille (3x3)
    const totalTiles = gridSize * gridSize;
    const tiles = [];
    let emptyTileIndex;

    // Générer les images
    function generateTiles() {
        const gridContainer = $('#grid-container');
        for (let i = 0; i < totalTiles - 1; i++) {
            const tile = $('<div class="grid-item"><img src="' + images[i] + '" alt="logo' + (i + 1) + '"></div>');
            tile.data('index', i);
            gridContainer.append(tile);
            tiles.push(tile);
        }
        // Ajouter la case vide à la fin
        const emptyTile = $('<div class="grid-item empty"></div>');
        gridContainer.append(emptyTile);
        tiles.push(emptyTile);
        emptyTileIndex = totalTiles - 1;
    }

    // Mélanger les images
    function shuffleTiles() {
        for (let i = totalTiles - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            tiles[i].before(tiles[j]);
            // Mettre à jour l'indice de la case vide si nécessaire
            if (j === emptyTileIndex) {
                emptyTileIndex = i;
            } else if (i === emptyTileIndex) {
                emptyTileIndex = j;
            }
        }
    }

    // Déplacer une image
    function moveTile(index) {
        // Vérifier si le déplacement est valide
        if (isMoveValid(index)) {
            // Échanger les positions
            tiles[index].before(tiles[emptyTileIndex]);
            emptyTileIndex = index;
            // Vérifier la victoire
            if (isGameWon()) {
                alert('Vous avez gagné !');
                // Bloquer le jeu
                $('.grid-item').off('click');
            }
        }
    }

    // Vérifier si le déplacement est valide
    function isMoveValid(index) {
        // Vérifier si l'image est adjacente à la case vide
        return Math.abs(index - emptyTileIndex) === 1 || Math.abs(index - emptyTileIndex) === gridSize;
    }

    // Vérifier si le joueur a gagné
    function isGameWon() {
        for (let i = 0; i < totalTiles - 1; i++) {
            if (tiles[i].data('index') !== i) {
                return false;
            }
        }
        return true;
    }

    // Gérer le clic sur le bouton "Recommencer"
    $('#restart-button').on('click', function() {
        // Réinitialiser le jeu en générant de nouvelles images et en les mélangeant
        $('#grid-container').empty();
        tiles.length = 0;
        generateTiles();
        shuffleTiles();
        // Réactiver le jeu
        $('.grid-item').on('click', function() {
            const index = $(this).index();
            moveTile(index);
        });
    });

    // Initialiser le jeu
    generateTiles();
    shuffleTiles();
    // Activer le jeu
    $('.grid-item').on('click', function() {
        const index = $(this).index();
        moveTile(index);
    });
});
