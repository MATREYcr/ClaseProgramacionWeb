// Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

// // escribe tu respuesta acá

// // código de prueba
// console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// // 1
// // Hola
// // 2
// // Mundo

function imprimirArreglo(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

// Código de prueba
imprimirArreglo([1, "Hola", 2, "Mundo"]);

