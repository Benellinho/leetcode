/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbol = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let resposta = 0;
    for (let i = 0; i < s.length; i++) {
        const element = symbol[s[i]];
        let proximo = symbol[s[i + 1]] ?? 0;
        if (element < proximo) {
            result -= element;
        } else {
            result += element
        }
    }
    return resposta;
};

function main() {
    console.log(romanToInt("LVIII"));
}

main()