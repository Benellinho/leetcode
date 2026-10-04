/**
 * @param {string} s
 * @return {boolean}
 */
// Problema do dia 04/10/2026
// Ideia: fazer contadores e usar o cont do * para oque for preciso compensar de diferença
var checkValidString = function (s) {
    let coringa = 0;
    let abre = 0;
    let fecha = 0;
    if (s[0] == ")" || s[s.length - 1] == "(") {
        return false
    }
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (element == "(") {
            abre++;
        }
        else if (element == ")") {
            fecha++;
        }
        else {
            coringa++;
        }
        if (fecha > coringa + abre) {
            console.log("[checkValidString] Retornando false: fecha excedeu coringa + abre.");
            return false
        }
    }
    const diferenca = Math.abs(fecha - abre);
    const resultado = diferenca <= coringa;
    if (!resultado) {
        return false
    }
    coringa = 0;
    abre = 0;
    fecha = 0;
    for (let i = s.length - 1; i > 0; i--) {
        const element = s[i];
        if (element == "(") {
            abre++;
        }
        else if (element == ")") {
            fecha++;
        }
        else {
            coringa++;
        }
        if (abre > coringa + fecha) {
            console.log("[checkValidString] Retornando false: abre excedeu coringa + fecha.");
            return false
        }
    }
    return true
};
function main() {
    const casos = [
        {
            s: "()",
            esperado: true
        },
        {
            s: "(*)",
            esperado: true
        },
        {
            s: "(*))",
            esperado: true
        },
        {
            s: "(",
            esperado: false
        },
        {
            s: "*",
            esperado: true
        },
        {
            s: "(**(*()**()**((**(*)",
            esperado: true
        },
        {
            s: "((*)(*))()*(*)****((*(*)())*()((()**(**)",
            esperado: true
        },
        {
            s: ")(*()(**(*)())*))())())*)()()*(((*)()))(**()*)**(*",
            esperado: false
        },
        {
            s: ")))(*)**)))*)))))*)*(((()(((*())(***)**(**((()))()((*((()(((",
            esperado: false
        },
        {
            s: "()))))**)(()*()**)))()*)()())*(*)())**()*)))(**())))()**))*)*()**((*(*",
            esperado: false
        },
        {
            s: "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())",
            esperado: false
        },
        {
            s: "*(*)(*))((*)*)))(*)())*())()(()*)*)****)())(()()*(*(*())()((())))*()****)(*(()))((*()*(**(*()*)*()",
            esperado: true
        }
    ];

    casos.forEach(({ s, esperado }, indice) => {
        const resultado = checkValidString(s);
        console.log(`Caso ${indice + 1}:`);
        console.log("Entrada:", { s });
        console.log("Resultado:", resultado);
        console.log("Esperado:", esperado);
    });
}

main();
