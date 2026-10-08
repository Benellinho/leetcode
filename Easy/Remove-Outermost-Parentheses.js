/**
 * @param {string} s
 * @return {string}
 */
// Problema do dia 08/10/2026
// Ideia: criar um novo array com todos os parenteses e estão no mínimo dentro de um abrir;
var removeOuterParentheses = function (s) {
    let resposta = "";
    let abre = 0;
    for (i = 0; i < s.length; i++) {
        const element = s[i];
        if (element == "(") {
            abre++;
            if (abre > 1) {
                resposta[h] = element
                h++;
            }
        }
        else {
            if (abre > 1) {
                resposta += element
                abre--;
            }
            else {
                abre--;
            }
        }
    }
    return resposta.join("")

};

function main() {
    const casos = [
        {
            s: "(()())(())",
            esperado: "()()()"
        },
        {
            s: "(()())(())(()(()))",
            esperado: "()()()()(())"
        },
        {
            s: "()()",
            esperado: ""
        }
    ];

    casos.forEach(({ s, esperado }, indice) => {
        const resultado = removeOuterParentheses(s);
        console.log(`Caso ${indice + 1}:`);
        console.log("Entrada:", { s });
        console.log("Resultado:", resultado);
        console.log("Esperado:", esperado);
    });
}

main();
