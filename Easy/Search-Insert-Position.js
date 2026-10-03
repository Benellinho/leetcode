/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let esquerda = 0
    let direita = nums.length - 1
    while (true) {
        const meio = Math.floor((esquerda + direita) / 2)
        console.log(nums[meio - 1], nums[meio], nums[meio + 1])
        if (nums[meio] === target || (nums[meio] > target && nums[meio - 1] < target) || (nums[meio] > target && meio == 0)) {
            return meio;
        }
        else if ((nums[meio] < target && meio + 1 == nums.length) || (nums[meio] < target && nums[meio + 1] > target)) {
            return meio + 1
        }

        else if (nums[meio] < target) {
            esquerda = meio + 1
        } else {
            direita = meio - 1
        }
    }
};

function main() {
    const casos = [
        { nums: [1, 3, 5, 6], target: 5, esperado: 2 },
        { nums: [1, 3, 5, 6], target: 2, esperado: 1 },
        { nums: [1, 3, 5, 6], target: 7, esperado: 4 },
        { nums: [1,3], target: 2, esperado: 1 },
    ];

    casos.forEach(({ nums, target, esperado }, indice) => {
        const resultado = searchInsert(nums, target);
        console.log(`Caso ${indice + 1}:`);
        console.log("Entrada:", { nums, target });
        console.log("Resultado:", resultado);
        console.log("Esperado:", esperado);
    });
}

main();
