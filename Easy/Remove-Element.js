/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// Ideia: Ver onde tem o elemento invalido e substituir por um valido
var removeElement = function (nums, val) {
    let k = nums.length;
    let troca = k - 1;
    for (let i = 0; i < nums.length; i++) {
        if (val === nums[i]) {
            while (nums[troca] === val) {
                troca--;
            }
            nums[i] = nums[troca];
            troca--;
            k--;
        }
    }
    return k
};