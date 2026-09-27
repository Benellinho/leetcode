/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// Solução própria
// Ideia: Fazer uma contagem / divisão manual do numero
var divide = function (dividend, divisor) {
    if (divisor == 1 || divisor == -1) {
        if ((2147483647 <= dividend && divisor == 1) || (-2147483647 >= dividend && divisor == -1) || (-2147483648 >= dividend && divisor == -1)) {
            return 2147483647
        }
        else if ((-2147483648 >= dividend && divisor == 1)) {
            return -2147483648
        }
        else if (divisor == -1) {
            return -dividend
        }
        else {
            return dividend
        }
    }
    let resultado = 0;
    let negativo = false;
    if (dividend < 0 && divisor < 0) {
        negativo = false
        dividend = -dividend
        divisor = -divisor
    }
    else if (dividend > 0 && divisor < 0) {
        negativo = true
        divisor = -divisor
    }
    else if (dividend < 0 && divisor > 0) {
        negativo = true
        dividend = -dividend
    }
    let temp = 0;
    while (temp + divisor <= dividend) {
        if ((temp + temp) <= dividend && resultado != 0) {
            resultado = resultado + resultado;
            temp = temp + temp;
        }
        else {
            resultado++;
            temp = temp + divisor;
        }
    }
    if (negativo) {
        resultado = -resultado
    }
    if (2147483647 < resultado) {
        resultado = 2147483647
    }
    else if (-2147483647 > resultado) {
        resultado = -2147483648
    }
    return resultado
};


// Solução ideal
// Diferença: a solução própria só deixava ir em dobrou ou 1 a 1 essa permite múltiplos diferentes do divisor
var divide = function (dividend, divisor) {
    let dividindo = divisor < 0 ? -divisor : divisor;
    let Numerador = dividend < 0 ? -dividend : dividend;

    if (Numerador === 0 || dividindo > Numerador)
        return 0;

    let count = 0;

    while (Numerador >= dividindo) {

        let divisorMult = dividindo;
        let total = 1;

        while (Numerador >= divisorMult + divisorMult) {
            divisorMult += divisorMult;
            total += total;
        }

        Numerador -= divisorMult;
        count += total;
    }

    if (
        (dividend < 0 && divisor < 0) ||
        (dividend >= 0 && divisor >= 0)
    ) {
        return count > 2147483647 ? 2147483647 : count;
    }

    return -count < -2147483648
        ? -2147483648
        : -count;
};

function main() {
    console.log('Caso 1:', divide(10, 3), 'Esperado:', 3);
    console.log('Caso 2:', divide(7, -3), 'Esperado:', -2);
    console.log('Caso 3:', divide(0, 1), 'Esperado:', 0);
}

main();
