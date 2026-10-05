/**
 * @param {string} s
 * @return {number}
 */
// Problema do dia 05/10/2026
// Ideia: Fazer uma contagem por nível acumulativa e ir somando com os níveis superiores no final
var scoreOfParentheses = function (s) {
    console.log("[score] Entrada:", s);

    let j = 0;
    let acumulado = [];
    let i;
    let ultimo = s[0];

    console.log("[score] Estado inicial:", {
        abre: j,
        acumulado: acumulado[j],
    });

    for (i = 0; i < s.length; i++) {
        const element = s[i];
        if (element == "(") {
            acumulado[j] = acumulado[j] ?? 0
            j++;
        }
        else if (element == ")" && ultimo == "(") {
            j--;
            acumulado[j] = acumulado[j] != undefined ? acumulado[j] + 1 : 1;
        }
        else if (element == ")" && ultimo == ")") {
            j--;
            acumulado[j] += acumulado.pop() * 2
        }
        ultimo = element
        console.log("[score] Fim da iteração:", {
            i,
            abre: j,
            acumulado: acumulado[j],
            ultimo,
        });
    }
    console.log("[score] Resultado final:", acumulado[0]);
    return acumulado[0]
};

function main() {
    const casos = [
        {
            s: "()",
            esperado: 1,
        },
        {
            s: "(())",
            esperado: 2,
        },
        {
            s: "()()",
            esperado: 2,
        },
        {
            s: "((()()()))",
            esperado: 12,
        },
        {
            s: "(()(()))",
            esperado: 6,
        },
        {
            s: "()()()()()()()(((())))",
            esperado: 15,
        },
        {
            s: "((((((()))((()))))))",
            esperado: 128,
        },
        {
            s: "(()()(((())(((()))))))",
            esperado: 84,
        },
        {
            s: "(((((((((()()()))))((((())))))(((((((())))))))))))",
            esperado: 4096,
        },
    ];

    casos.forEach(({ s, esperado }, indice) => {
        const resultado = scoreOfParentheses(s);

        console.log(`Caso ${indice + 1}:`);
        console.log("Entrada:", { s });
        console.log("Resultado:", resultado);
        console.log("Esperado:", esperado);
    });
}

main();
