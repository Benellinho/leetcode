/**
 * @param {string} s
 * @return {string[]}
 */
// Problema do dia 07/10/2026
// Ideia: ver o mínimo necessário e testar em profundidade os caminhos;
var removeInvalidParentheses = function (s) {
    var minAddToMakeValid = function (s) {
        let erros = 0;
        let abre = 0;
        let fecha = 0;
        for (let i = 0; i < s.length; i++) {
            const element = s[i];
            if (element == "(") {
                abre++;
            }
            else if (element == ")") {
                fecha++;
            }
            else {
                continue
            }
            if (fecha > abre) {
                erros++;
                abre++;
            }
        }
        if (abre > fecha) {
            erros = erros + (abre - fecha)
        }
        return erros;
    };
    const tamanho = s.length
    const erros = minAddToMakeValid(s);
    if (erros == tamanho) {
        return [""]
    }
    const resultados = new Set();
    function dfs(indice, caminho, saldo, removidos) {
        if (indice == s.length) {
            if (saldo === 0 && removidos === erros) {
                resultados.add(caminho.join(""))
            }
            return
        }
        else if (removidos > erros) {
            return
        }
        const caractere = s[indice]
        if (caractere != "(" && caractere != ")") {
            caminho.push(caractere);
            dfs(indice + 1, caminho, saldo, removidos)
            caminho.pop();
        }
        else {
            if (caractere == "(") {
                caminho.push(caractere);
                dfs(indice + 1, caminho, saldo + 1, removidos)
                caminho.pop();
                dfs(indice + 1, caminho, saldo, removidos + 1)
            }
            else if (caractere == ")") {
                if (saldo > 0) {
                    caminho.push(caractere);
                    dfs(indice + 1, caminho, saldo - 1, removidos)
                    caminho.pop();
                    dfs(indice + 1, caminho, saldo, removidos + 1)
                }
                else {
                    dfs(indice + 1, caminho, saldo, removidos + 1)
                }
            }
        }


    }
    let caminho = [];
    dfs(0, caminho, 0, 0)
    return [...resultados]
};

function main() {
    const casos = [
        {
            s: "()())()",
            esperado: ["(())()", "()()()"],
        },
        {
            s: "(a)())()",
            esperado: ["(a())()", "(a)()()"],
        },
        {
            s: ")(",
            esperado: [""],
        },
        {
            s: "((((((a))))))",
            esperado: ["((((((a))))))"],
        },
        {
            s: ")()()(a)()()(",
            esperado: ["()()(a)()()"],
        },
        {
            s: "((a)b)c)d)e)f",
            esperado: [
                "((abcd)e)f",
                "((abc)de)f",
                "((ab)cde)f",
                "((a)bcde)f",
                "((abc)d)ef",
                "((ab)cd)ef",
                "((a)bcd)ef",
                "((ab)c)def",
                "((a)bc)def",
                "((a)b)cdef",
            ],
        },
        {
            s: "(((a)b)c)d)e)",
            esperado: [
                "(((abc)d)e)",
                "(((ab)cd)e)",
                "(((a)bcd)e)",
                "(((ab)c)de)",
                "(((a)bc)de)",
                "(((a)b)cde)",
                "(((ab)c)d)e",
                "(((a)bc)d)e",
                "(((a)b)cd)e",
                "(((a)b)c)de",
            ],
        },
        {
            s: ")()())()())()",
            esperado: [
                "(()()())()",
                "()(()())()",
                "(())(())()",
                "()()(())()",
                "(())()()()",
                "()()()()()",
            ],
        },
        {
            s: "(a)b(c)d(e)f(g",
            esperado: ["(a)b(c)d(e)fg"],
        },
        {
            s: "((()()()()()))",
            esperado: ["((()()()()()))"],
        },
        {
            s: "())(())(())(()",
            esperado: ["()(())(())()"],
        },
        {
            s: "a)b)c)d)e)f)g)h",
            esperado: ["abcdefgh"],
        },
        {
            s: "a)b(c)d(e)f(g)h",
            esperado: ["ab(c)d(e)f(g)h"],
        },
        {
            s: "(((((a)b)c)d)e)",
            esperado: ["(((((a)b)c)d)e)"],
        },
        {
            s: "(a)b)c(d)e)f(g)",
            esperado: [
                "(abc(d)e)f(g)",
                "(ab)c(de)f(g)",
                "(a)bc(de)f(g)",
                "(ab)c(d)ef(g)",
                "(a)bc(d)ef(g)",
            ],
        },
    ];

    casos.forEach(({ s, esperado }, indice) => {
        const resultado = removeInvalidParentheses(s);

        console.log(`Caso ${indice + 1}:`);
        console.log("Entrada:", { s });
        console.log("Resultado:", resultado);
        console.log("Esperado:", esperado);
    });
}

main();
