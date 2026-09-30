/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            let pivo = i + 1
            let menorindex = pivo;
            for (let j = pivo; j < nums.length; j++) {
                if (nums[j] < nums[menorindex] && nums[j] > nums[i]) {
                    menorindex = j;
                }
            }
            let temp = nums[i];
            nums[i] = nums[menorindex]
            nums[menorindex] = temp
            const sufixo = nums.slice(pivo);
            sufixo.sort((a, b) => a - b)
            for (let j = 0; j < sufixo.length; j++) {
                nums[pivo + j] = sufixo[j];
            }
            return
        }
    }
    nums.reverse()
    return

}

function main() {
    const nums1 = [1, 2, 3];
    nextPermutation(nums1);
    console.log("Caso 1:", nums1, "Saída esperada:", [1, 3, 2]);

    const nums2 = [3, 2, 1];
    nextPermutation(nums2);
    console.log("Caso 2:", nums2, "Saída esperada:", [1, 2, 3]);

    const nums3 = [1, 1, 5];
    nextPermutation(nums3);
    console.log("Caso 3:", nums3, "Saída esperada:", [1, 5, 1]);

    const nums4 = [1, 3, 2];
    nextPermutation(nums4);
    console.log("Caso 4:", nums4, "Saída esperada:", [2, 1, 3]);
    const nums5 = [5, 4, 7, 5, 3, 2];
    nextPermutation(nums5);
    console.log("Caso 5:", nums5, "Saída esperada:", [5, 5, 2, 3, 4, 7]
    );
}

main();

[1, 2, 3, 4, 5], // índice 0
    [1, 2, 3, 5, 4], // índice 1
    [1, 2, 4, 3, 5], // índice 2
    [1, 2, 4, 5, 3], // índice 3
    [1, 2, 5, 3, 4], // índice 4
    [1, 2, 5, 4, 3], // índice 5
    [1, 3, 2, 4, 5], // índice 6
    [1, 3, 2, 5, 4], // índice 7
    [1, 3, 4, 2, 5], // índice 8
    [1, 3, 4, 5, 2], // índice 9
    [1, 3, 5, 2, 4], // índice 10
    [1, 3, 5, 4, 2], // índice 11
    [1, 4, 2, 3, 5], // índice 12
    [1, 4, 2, 5, 3], // índice 13
    [1, 4, 3, 2, 5], // índice 14
    [1, 4, 3, 5, 2], // índice 15
    [1, 4, 5, 2, 3], // índice 16
    [1, 4, 5, 3, 2]  // índice 17
