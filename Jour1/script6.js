// Déclarer une fonction “fizzbuzz” sans “paramètre”
    // Affichez dans la console web les nombres de 1 à 151 
// Déclarer une conditions
    //➔ Si le nombre est un multiple de 3, affichez “Fizz”.
    //➔ Si le nombre est un multiple de 5, affichez “Buzz”.
    //➔ Si le nombre est un multiple de 3 et de 5, affichez “FizzBuzz”.


// Déclaration de la fonction “fizzbuzz” et ne prend rien en paramètre
function fizzbuzz() {
    // Boucle qui parcourez les nombres de 1 à 151
    for (var i = 1; i <= 151; i++) {

        // Vérifie ci le nombre est divisible par 3 et 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " FizzBuzz");
        }

        // Vérifie ci le nombre divisible par 3
        else if (i % 3 === 0) {
            console.log(i + " Fizz");
        }

        // Vérifie ci le nombre divisible par 5
        else if (i % 5 === 0) {
            console.log(i + " Buzz");
        }

        // Si aucune des conditions ci-dessus n'est remplie, imprime le numéro
        else {
            console.log(i);
        }
    } 

}

fizzbuzz()



    