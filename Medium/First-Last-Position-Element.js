/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let esquerda = 0
    let direita = nums.length - 1
    let primeiro = -1

    while (esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2)

        if (nums[meio] === target) {
            primeiro = meio
            direita = meio - 1
        } else if (nums[meio] < target) {
            esquerda = meio + 1
        } else {
            direita = meio - 1
        }
    }

    esquerda = 0
    direita = nums.length - 1
    let ultimo = -1

    while (esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2)

        if (nums[meio] === target) {
            ultimo = meio
            esquerda = meio + 1
        } else if (nums[meio] < target) {
            esquerda = meio + 1
        } else {
            direita = meio - 1
        }
    }

    return [primeiro, ultimo]
}
function main() {
    const casos = [
        {
            nums: [5, 7, 7, 8, 8, 10],
            target: 8,
            esperado: [3, 4],
        },
        {
            nums: [5, 7, 7, 8, 8, 10],
            target: 6,
            esperado: [-1, -1],
        },
        {
            nums: [],
            target: 0,
            esperado: [-1, -1],
        },
        {
            nums: [],
            target: 42,
            esperado: [-1, -1],
        },
        {
            nums: [7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9],
            target: 7,
            esperado: [0, 0],
        },
        {
            nums: [7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9],
            target: 8,
            esperado: [1, 11],
        },
        {
            nums: [7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9],
            target: 10,
            esperado: [-1, -1],
        },
        {
            nums: [1, 2, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12, 12, 13],
            target: 2,
            esperado: [1, 4],
        },
        {
            nums: [-999985131, -999953607, -999953607, -999915742, -999883817, -999849817, -999822901, -999815377, -999810801, -68594, -49967, 20394, 114012, 999969829, 999973689, 999975494],
            target: -999953607,
            esperado: [1, 2],
        },
    ];

    casos.forEach(({ nums, target, esperado }, indice) => {
        const resultado = searchRange(nums, target);

        console.log(`Caso ${indice + 1}:`);
        console.log("Entrada:", { nums, target });
        console.log("Resultado:", resultado);
        console.log("Esperado:", esperado);
    });
}

main();
