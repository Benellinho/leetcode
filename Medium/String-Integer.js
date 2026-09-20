/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let iniciado = false;
    let negativo = 1;
    let resultado = 0;
    let i = 0;
    const especiais = ["-", "+", ",", "."]
    const autorizados = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "+", ",", "."]
    for (let j = 0; j < s.length; j++) {
        const element = s[j]
        if (autorizados.includes(element)) {
            if (especiais.includes(element) && iniciado) {
                break
            }
            else {
                if (element == "-") {
                    negativo = -1
                    iniciado = true;
                }
                else if (element == ".") {
                    break
                }
                else if (!especiais.includes(element)) {
                    resultado = (resultado * 10) + Number(element)
                    i++;
                }
                iniciado = true;
            }
        }
        else if (iniciado || /^\p{L}$/u.test(element)) {
            break
        }
    }
    resultado = resultado * negativo
    if (2147483647 < resultado) {
        resultado = 2147483647
    }
    else if (-2147483647 > resultado) {
        resultado = -2147483648
    }
    return resultado
};


function main() {
    let string = "21474836460"
    console.log(myAtoi(string));
}

main()