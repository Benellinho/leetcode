/**
 *  @param {number[]} nums
 *  @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let falta = 0;
    let h = 0;
    let resposta = [];
    let passado1 = null;
    let passado2 = null;
    const vistos = new Map();
    const triplasAdicionadas = new Set();
    for (let i = 0; i < nums.length - 2; i++) {
        const element1 = nums[i];
        if (!(element1 == passado1)) {
            for (let j = i + 1; j < nums.length; j++) {
                const element2 = nums[j];
                falta = element2 + element1
                if (vistos.has(-falta) && i != vistos.get(-falta) &&  j != vistos.get(-falta)) {
                    const chave = [element1, element2, -falta].sort((a, b) => a - b).join(',');
                    if (!triplasAdicionadas.has(chave)) {
                        triplasAdicionadas.add(chave);
                        resposta[h] = [element1, element2, (-falta)]
                        console.log('Tripla:', resposta[h], '| Indices:', )
                        h++
                    }
                }
                if (i == 0) {
                    vistos.set(element2, j)
                }
            }
            passado2 = null
        }
        passado1 = element1
    }
    return resposta
}

function main() {
    console.log(threeSum([-100,-70,-60,110,120,130,160]))
}

main()
