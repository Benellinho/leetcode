/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    console.log("[entrada]", { strs });
    let prefixo = "";
    let j = 0;
    while(true){
        temp = strs[0][j]
        console.log("[inicio da iteracao]", { j, temp, prefixo });
        for (let i = 1; i < strs.length; i++) {
            console.log("[comparacao]", { i, j, palavra: strs[i], esperado: temp, atual: strs[i][j] });
            if (temp != strs[i][j]) {
                console.log("[diferenca encontrada: retorno]", { prefixo });
                return prefixo
            }
        }
        if (temp == undefined) {
            return prefixo
        }
        prefixo = prefixo + temp
        j++
        console.log("[prefixo atualizado]", { prefixo, tipo: typeof prefixo, j });
    }
};

function main() {
    let strs = ["flower","flow","flight"]
    console.log(longestCommonPrefix(strs));
}

main()
