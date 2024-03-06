// Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

// // escribe tu respuesta acá

// // código de prueba
// console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
// console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
// console.log(multiplicarArreglo([])) // 1


function multiplicarArreglo(arreglo) {
    if (arreglo.length === 0) {
        return 1;
    }
    let producto = 1;
    for (let i = 0; i < arreglo.length; i++) {
        producto *= arreglo[i];
    }
    return producto;
}

// Código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1
