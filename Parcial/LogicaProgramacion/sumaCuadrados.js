const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
function sumarCuadros(arrayNumeros) {
    function showCuadros(numero, esUltimo) {
        const numeroString = String(numero);
        const borde = esUltimo ? "=" : "-";
        const length = numeroString.length;

        let result = "+ " + borde.repeat(length) + " +\n";
        result += "| " + numeroString.padEnd(length, ' ') + " |\n";
        result += "+ " + borde.repeat(length) + " +\n";

        return result;
    }

    let sumaCuadros = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (i === arrayNumeros.length - 1) {
            console.log(showCuadros(arrayNumeros[i], false));
        } else {
            console.log(showCuadros(arrayNumeros[i], false));
        }
        sumaCuadros += arrayNumeros[i];
    }
    console.log(showCuadros(sumaCuadros, true));

}
sumarCuadros(arrayNumeros);