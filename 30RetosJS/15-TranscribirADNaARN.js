// Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

// Los complementos son los siguientes:

// G -> C
// C -> G
// T -> A
// A -> U
// // escribe tu función acá

// // código de prueba
// console.log(transcribir("ACGT")) // "UGCA"
// console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

function transcribir(cadenaADN) {
    const complementosARN = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };

    const cadenaARN = cadenaADN.split('').map(nucleotido => complementosARN[nucleotido]).join('');

    return cadenaARN;
}

// Código de prueba
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"
