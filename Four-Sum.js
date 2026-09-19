/**
 *  @param {number[]} nums
 *  @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let resposta = [];
    let h = 0;
    let indiceEsquerda = nums.length - 1
    const triplasAdicionadas = new Set();
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < nums.length - 2; j++) {
            let esquerda = j + 1
            let direita = indiceEsquerda
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            while (esquerda < direita) {
                const soma = nums[j] + nums[i] + nums[esquerda] + nums[direita];
                if (soma === target) {
                    const chave = [nums[j], nums[i], nums[esquerda], nums[direita]].sort((a, b) => a - b).join(',');
                    if (!triplasAdicionadas.has(chave)) {
                        triplasAdicionadas.add(chave);
                        resposta[h] = [nums[j], nums[i], nums[esquerda], nums[direita]]
                        console.log('Quadra:', resposta[h], '| Indices:', h)
                        h++
                    }
                }
                if (soma < target) {
                    do {
                        esquerda++;
                    }
                    while (esquerda < direita && nums[esquerda - 1] === nums[esquerda])
                } else {
                    do {
                        direita--
                    }
                    while (esquerda < direita && nums[direita + 1] === nums[direita])
                }
            }
        }
    }
    return resposta;
}

function main() {
    console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
}

main()
