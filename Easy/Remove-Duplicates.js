/**
 * @param {number[]} nums
 * @return {number}
 */
// Problema sem teste por ter sido feita de primeira para testar se era assim a solicitação por ter um teste diferente
var removeDuplicates = function (nums) {
    let maior = -Infinity;
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element > maior) {
            maior = element;
            nums[k] = element;
            k++;
        }
    }
    return k
};