/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
    }
    return -1
};

function main() {
    const casos = [
        {
            nums: [4, 5, 6, 7, 0, 1, 2],
            target: 0,
            esperado: 4,
        },
        {
            nums: [4, 5, 6, 7, 0, 1, 2],
            target: 3,
            esperado: -1,
        },
        {
            nums: [1],
            target: 0,
            esperado: -1,
        },
    ];

    casos.forEach(({ nums, target, esperado }, indice) => {
        const resultado = search(nums, target);

        console.log(`Caso ${indice + 1}:`);
        console.log("Entrada:", { nums, target });
        console.log("Resultado:", resultado);
        console.log("Esperado:", esperado);
    });
}

main();
