/*
Commencez par créer deux fichiers HTML “connexion.html” et
“inscription.html” contenant un formulaire.

Le formulaire de la page de connexion doit contenir les champs suivants :
➔ Email
➔ Mot de passe

Le formulaire de la page inscription être composé au minimum des champs
suivants :
➔ Nom
➔ Prénom
➔ Email
➔ Mot de passe
➔ Adresse
➔ Code postal

Chaque champ doit être vérifié de façon asynchrone.

Un message lié à chaque erreur doit être affiché en dessous de chaque
champ du formulaire le cas échéant.
*/

//--------------------------------------------------FORMULAIRE--------------------------------------------------//
// Récupération des éléments du formulaire
let prenom = document.getElementById("name"); 
let family = document.getElementById("family"); 
let numeros = document.getElementById("numeros"); 
let mail = document.getElementById("mail"); 
let sujet = document.getElementById("sujet"); 
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
let address = document.getElementById("address");
let postalCode = document.getElementById("postal_code");
let myForm = document.getElementById("myForm"); 

// Récupération des éléments pour afficher les messages d'erreur
let error_prenom = document.getElementById("error_name"); 
let error_family = document.getElementById("error_family"); 
let error_numeros = document.getElementById("error_numeros");  
let error_mail = document.getElementById("error_mail");  
let error_sujet = document.getElementById("error_sujet");
let error_password = document.getElementById("error_password");
let error_confirmPassword = document.getElementById("error_confirm_password");
let error_address = document.getElementById("error_address");
let error_postalCode = document.getElementById("error_postal_code");

// Expressions régulières pour la validation
let myRegex = /^[a-zA-Z-\s]+$/;  
let myRegexNumber = /^[0-9-\s]+$/; 
let myRegexmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/; 

// Ajout d'un écouteur d'événements pour le formulaire
myForm.addEventListener("submit" , valid_f);

// Fonction de validation
function valid_f(e){
    // Validation du prénom
    if (prenom.value.length < 3) {
        error_name.innerHTML = "Le prénom doit contenir au moins 3 caractères !";
        error_name.style.color = "red";
        prenom.style.borderColor = "red";
        e.preventDefault();
    } else if(prenom.value === "") {
        error_name.innerHTML = "Le prénom est requis !";
        error_name.style.color = "red";
        prenom.style.borderColor = "red";
        e.preventDefault();
    } else if (!myRegex.test(prenom.value)) {
        error_name.innerHTML = "Veuillez entrer une autre valeur !";
        error_name.style.color = "red";
        prenom.style.borderColor = "red";
        e.preventDefault();
    } else {
        error_name.innerHTML = "";
        error_name.style.color = "green";
        prenom.style.borderColor = "green";
    }

    // Validation du nom de famille
    if (family.value.length < 3) {
        error_family.innerHTML = "Le nom doit contenir au moins 3 caractères !";
        error_family.style.color = "red";
        family.style.borderColor = "red";
        e.preventDefault();
    } else if (family.value === "") {
        error_family.innerHTML = "Le nom est requis !";
        error_family.style.color = "red";
        family.style.borderColor = "red";
        e.preventDefault();
    } else if (!myRegex.test(family.value)) {
        error_family.innerHTML = "Veuillez entrer une autre valeur !";
        error_family.style.color = "red";
        family.style.borderColor = "red";
        e.preventDefault();
    } else {
        error_family.innerHTML = "";
        error_family.style.color = "green";
        family.style.borderColor = "green";
    }

    // Validation du mot de passe
    if (password.value.length < 6) {
        error_password.innerHTML = "Le mot de passe doit contenir au moins 6 caractères !";
        error_password.style.color = "red";
        password.style.borderColor = "red";
        e.preventDefault();
    } else if (password.value === "") {
        error_password.innerHTML = "Le mot de passe est requis !";
        error_password.style.color = "red";
        password.style.borderColor = "red";
        e.preventDefault();
    } else {
        error_password.innerHTML = "";
        error_password.style.color = "green";
        password.style.borderColor = "green";
    }

    // Validation de la confirmation du mot de passe
    if (confirmPassword.value.length < 6) {
        error_confirmPassword.innerHTML = "La confirmation du mot de passe doit contenir au moins 6 caractères !";
        error_confirmPassword.style.color = "red";
        confirmPassword.style.borderColor = "red";
        e.preventDefault();
    } else if (confirmPassword.value === "") {
        error_confirmPassword.innerHTML = "La confirmation du mot de passe est requise !";
        error_confirmPassword.style.color = "red";
        confirmPassword.style.borderColor = "red";
        e.preventDefault();
    } else if (confirmPassword.value !== password.value) {
        error_confirmPassword.innerHTML = "Les mots de passe ne correspondent pas !";
        error_confirmPassword.style.color = "red";
        confirmPassword.style.borderColor = "red";
        e.preventDefault();
    } else {
        error_confirmPassword.innerHTML = "";
        error_confirmPassword.style.color = "green";
        confirmPassword.style.borderColor = "green";
    }
    

    // Validation de l'adresse
    if (address.value.length < 3) {
        error_address.innerHTML = "L'adresse doit contenir au moins 3 caractères !";
        error_address.style.color = "red";
        address.style.borderColor = "red";
        e.preventDefault();
    } else if (address.value === "") {
        error_address.innerHTML = "L'adresse est requise !";
        error_address.style.color = "red";
        address.style.borderColor = "red";
        e.preventDefault();
    } else {
        error_address.innerHTML = "";
        error_address.style.color = "green";
        address.style.borderColor = "green";
    }

    // Validation du code postal
    if (postalCode.value.length < 3) {
        error_postalCode.innerHTML = "Le code postal doit contenir au moins 3 caractères !";
        error_postalCode.style.color = "red";
        postalCode.style.borderColor = "red";
        e.preventDefault();
    } else if (postalCode.value === "") {
        error_postalCode.innerHTML = "Le code postal est requis !";
        error_postalCode.style.color = "red";
        postalCode.style.borderColor = "red";
        e.preventDefault();
    } else if (!myRegexNumber.test(postalCode.value)) {
        error_postalCode.innerHTML = "Veuillez entrer une autre valeur !";
        error_postalCode.style.color = "red";
        postalCode.style.borderColor = "red";
        e.preventDefault();
    } else {
        error_postalCode.innerHTML = "";
        error_postalCode.style.color = "green";
        postalCode.style.borderColor = "green";
    }
}
