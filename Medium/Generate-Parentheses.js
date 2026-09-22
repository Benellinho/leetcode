/**
 * @param {number} n
 * @return {string[]}
 */
// Ideia: Usar recursão para explorar as possibilidades e filtrar só as que chegaram a (n * 2) caracteres
var generateParenthesis = function (n) {
    let resposta = [];
    let j = 0;
    function montar(i, Aberto, fechado, string) {
        if (i < (n * 2)) {
            if (Aberto != n) {
                let string1 = string + "("
                montar(i + 1, Aberto + 1, fechado, string1)
            }
            if (Aberto > fechado) {
                let string2 = string + ")"
                montar(i + 1, Aberto, fechado + 1, string2)
            }
        }
        else if(i == (n * 2)) {
            resposta[j] = string;
            j++
        }
    }
    montar(1, 1, 0, "(")
    return resposta
};

function main() {
    console.log(generateParenthesis(2));
}

main()