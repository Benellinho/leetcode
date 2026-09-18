/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const opção = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["x", "y", "w", "z"]
    }
    if (digits.length == 1) {
        return opção[digits[0]]
    }
    let temp = []
    for (let i = 0; i < digits.length; i++) {
        temp[i] = (opção[digits[i]])
    }
    const combinacoes = temp.reduce((acumulado, atual) => {
        return acumulado.flatMap(comb => atual.map(valor => [...comb, ...valor]));
    }, [[]]);
    return combinacoes.map(comb => comb.join(''))
};

function main() {
    let digits = "23"
    console.log(letterCombinations(digits));
}

main()