/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    console.log("Entrada:", { s, p });
    const memo = new Map();

    function comparar(i, j) {
        const chave = `${i},${j}`;
        if (memo.has(chave)) {
            return memo.get(chave);
        }

        console.log("Comparando:", { i, j, caractere: s[i], padrao: p[j] });
        let resultado;

        if (j === p.length) {
            resultado = i === s.length;
        } else {
            const corresponde =
                i < s.length && (s[i] === p[j] || p[j] === ".");

            if (p[j + 1] === "*") {
                resultado = comparar(i, j + 2) ||
                    (corresponde && comparar(i + 1, j));
            } else {
                resultado = corresponde && comparar(i + 1, j + 1);
            }
        }

        memo.set(chave, resultado);
        return resultado;
    }

    const resultado = comparar(0, 0);
    console.log("Resultado:", resultado);
    return resultado;
}
function main() {
    let s = "acaabbaccbbacaabbbb"
    let p = "a*.*b*.*a*aa*a*"
    console.log(isMatch(s, p));
}

main()
