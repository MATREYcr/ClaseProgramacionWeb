
// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

// // escribe tu función acá

// // código de prueba
// console.log(capitalizar("pedro")) // "Pedro"
// console.log(capitalizar("hola mundo")) // "Hola mundo"
// console.log(capitalizar("")) // ""



function capitalizar(cadena) {
    return cadena.length > 0 ? cadena.charAt(0).toUpperCase() + cadena.slice(1) : cadena;
}

// Código de prueba
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""
