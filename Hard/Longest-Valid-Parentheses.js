/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let inicio = 0;
    let fim = s.length - 1;

    while (inicio <= fim && s[inicio] === ")") inicio++;
    while (fim >= inicio && s[fim] === "(") fim--;

    let maior = 0;
    let limite = inicio - 1;
    const aberturas = [];

    for (let i = inicio; i <= fim; i++) {
        if (s[i] === "(") {
            aberturas.push(i);
            continue;
        }

        if (aberturas.length === 0) {
            limite = i;
            continue;
        }

        aberturas.pop();
        const antesDoInicio = aberturas.length > 0
            ? aberturas[aberturas.length - 1]
            : limite;

        maior = Math.max(maior, i - antesDoInicio);
    }

    return maior;
};

function main() {
    const casos = [
        {
            s: "(()",
            esperado: 2,
        },
        {
            s: ")()())",
            esperado: 4,
        },
        {
            s: "",
            esperado: 0,
        },
        {
            s: "(()))()()()()(",
            esperado: 8,
        },
        {
            s: ")(()(()(((())(((((()()))((((()()(()()())())())()))()()()())(())()()(((()))))()((()))(((())()((()()())((())))(())))())((()())()()((()((())))))((()(((((()((()))(()()(())))((()))()))())",
            esperado: 132,
        },
    ];

    casos.forEach(({ s, esperado }, indice) => {
        const resultado = longestValidParentheses(s);

        console.log(`Caso ${indice + 1}:`);
        console.log("Entrada:", { s });
        console.log("Resultado:", resultado);
        console.log("Esperado:", esperado);
    });
}

main();
