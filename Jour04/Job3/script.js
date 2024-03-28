function filtrerDonnees() {
    const formData = new FormData(document.getElementById('filterForm'));
    const params = new URLSearchParams(formData);

    fetch('pokemon.json') // Remplacez 'pokemon.json' par le nom de votre fichier de données
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier de données');
            }
            return response.json();
        })
        .then(data => {
            const filteredData = data.filter(item => {
                // Vérifier chaque élément par rapport aux critères sélectionnés
                let idMatch = true;
                let nomMatch = true;
                let typeMatch = true;

                if (params.get('id') !== '' && item.id !== params.get('id')) {
                    idMatch = false;
                }

                if (params.get('nom') !== '' && item.nom !== params.get('nom')) {
                    nomMatch = false;
                }

                if (params.get('type') !== '' && item.type !== params.get('type')) {
                    typeMatch = false;
                }

                return idMatch && nomMatch && typeMatch;
            });

            afficherResultats(filteredData);
        })
        .catch(error => {
            console.error('Une erreur est survenue:', error);
        });
}

function afficherResultats(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Effacer les résultats précédents

    if (data.length === 0) {
        resultDiv.innerText = 'Aucun résultat trouvé.';
    } else {
        const ul = document.createElement('ul');
        data.forEach(item => {
            const li = document.createElement('li');
            // Utilisation du nom français du Pokémon
            li.textContent = `ID: ${item.id}, Nom: ${item.name.french}, Type: ${item.type}`;
            ul.appendChild(li);
        });
        resultDiv.appendChild(ul);
    }
}



