// Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

// // escribe tu respuesta acá

// // código de prueba
// console.log(numeroDeAes("abracadabra")) // 5
// console.log(numeroDeAes("etinol")) // 0
// console.log(numeroDeAes("")) // 0


function numeroDeAes(cadena) {
    let contadorAes = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === 'a') {
            contadorAes++;
        }
    }

    return contadorAes;
}

// Código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0


