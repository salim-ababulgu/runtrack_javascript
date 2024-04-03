document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const address = document.getElementById("address").value;
        const postalCode = document.getElementById("postalCode").value;

        // Vérification de la saisie des champs
        if (firstName.trim() === '') {
            showError("firstName", "Veuillez saisir votre prénom.");
            return;
        }
        if (lastName.trim() === '') {
            showError("lastName", "Veuillez saisir votre nom.");
            return;
        }
        if (email.trim() === '') {
            showError("email", "Veuillez saisir votre adresse email.");
            return;
        }
        if (password.trim() === '') {
            showError("password", "Veuillez saisir votre mot de passe.");
            return;
        }
        if (address.trim() === '') {
            showError("address", "Veuillez saisir votre adresse.");
            return;
        }
        if (postalCode.trim() === '') {
            showError("postalCode", "Veuillez saisir votre code postal.");
            return;
        }

        // Vérification de l'email avec une expression régulière
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError("email", "Veuillez saisir une adresse email valide.");
            return;
        }

        // Vérification du code postal avec une expression régulière
        const postalCodeRegex = /^[0-9]{5}$/;
        if (!postalCodeRegex.test(postalCode)) {
            showError("postalCode", "Veuillez saisir un code postal valide (5 chiffres).");
            return;
        }

        // Validation réussie, soumettre le formulaire
        this.submit();
    });

    // Fonction pour afficher les messages d'erreur et mettre en évidence les champs en rouge
    function showError(fieldId, errorMessage) {
        const field = document.getElementById(fieldId);
        const errorSpan = document.getElementById(fieldId + "Error");
        errorSpan.textContent = errorMessage;
        errorSpan.style.color = "red";
        field.style.borderColor = "red";
    }
});
