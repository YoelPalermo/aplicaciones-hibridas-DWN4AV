console.log("asd");

export function esPrimo(numero) {
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return false;
    }
    return true;
}

//export con common
//module.exports = esPrimo;
//exports.esPrimo;