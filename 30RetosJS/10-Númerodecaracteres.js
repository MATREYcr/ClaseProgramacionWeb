// Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

// // escribe tu respuesta acá

// // código de prueba
// console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
// console.log(numeroDeCaracteres("MMMMM", "m")) // 0
// console.log(numeroDeCaracteres("eeee", e)) // 4


function numeroDeCaracteres(cadena, caracter) {
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === caracter.toLowerCase()) {
            contador++;
        }
    }

    return contador;
}

// Código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4
