/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// Ideia 1: Aplicar busca em profundidade (Deu erro caso especifico da time limit)
// Ideia 2: Fazer um map para ver se vai caber independende da ordem reduzindo combinações 
var findSubstring = function (s, words) {
    let h = 0;
    const frequenciaWords = new Map();
    for (const palavra of words) {
        const quantidade = frequenciaWords.get(palavra) || 0;
        frequenciaWords.set(palavra, quantidade + 1);
    }
    const tamanhoBloco = words[0].length
    const total = tamanhoBloco * words.length
    let resultado = [];
    for (let i = 0; i <= s.length - total; i++) {
        const mapa = new Map();
        for (let j = i; j < i + total; j += tamanhoBloco) {
            const bloco = s.slice(j, j + tamanhoBloco);
            mapa.set(bloco, (mapa.get(bloco) || 0) + 1);
        }
        if (mapasIguais(mapa, frequenciaWords)) {
            resultado[h] = i;
            h++;
        }
    }
    function mapasIguais(map1, map2) {
        if (map1.size !== map2.size) {
            return false;
        }

        for (const [palavra, quantidade] of map1) {
            if (map2.get(palavra) !== quantidade) {
                return false;
            }
        }
        return true
    };
    return resultado
};

function main() {
    const casos = [
        {
            s: "barfoothefoobarman",
            words: ["foo", "bar"],
            esperado: [0, 9],
        },
        {
            s: "wordgoodgoodgoodbestword",
            words: ["word", "good", "best", "word"],
            esperado: [],
        },
        {
            s: "barfoofoobarthefoobarman",
            words: ["bar", "foo", "the"],
            esperado: [6, 9, 12],
        },
    ];

    casos.forEach(({ s, words, esperado }, indice) => {
        const resultado = findSubstring(s, words);

        console.log(`Caso ${indice + 1}:`);
        console.log("Entrada:", { s, words });
        console.log("Resultado:", resultado);
        console.log("Esperado:", esperado);
    });
}

main();
