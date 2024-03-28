document.getElementById('updateButton').addEventListener('click', function() {
    fetch('utilisateur.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier utilisateur.json');
            }
            return response.json();
        })
        .then(data => {
            afficherUtilisateurs(data);
        })
        .catch(error => {
            console.error('Une erreur est survenue:', error);
        });
});

function afficherUtilisateurs(users) {
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = ''; // Effacer les lignes existantes

    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${user.email}</td>
        `;
        tableBody.appendChild(tr);
    });
}