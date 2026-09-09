/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let resposta = "";
    if (numRows == 1) {
        resposta += String(s)
        return resposta
    }
    s = s.replaceAll(",", "-")
    const palavra = [];
    for (let a = 0; a < numRows; a++) {
        if (palavra[a] === undefined) {
            palavra[a] = [];
        }
    }
    const tamanho = s.length
    let i = 0;
    let j = 0;
    let subindo = false
    for (let c = 0; c < tamanho; c++) {
        palavra[i][j] = s[c]
        if (i == 0) {
            subindo = false
        }
        if (i === (numRows - 1)) {
            subindo = true
        }
        if (!subindo) {
            i++;
        }
        if (subindo) {
            i--;
            j++;
        }
    }
    
     for (let a = 0; a < numRows; a++) {
        resposta += String(palavra[a]).replaceAll(",", "")
    }
    resposta = resposta.replaceAll("-",",")
    return resposta;
}

function main() {
    let string = "AB"
    let numRows = 1;
    console.log(convert(string, numRows));
}

main()

