/**
 *  @param {number[]} nums
 *  @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let melhor = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let esquerda = i + 1;
        let direita = nums.length - 1;

        while (esquerda < direita) {
            const soma = nums[i] + nums[esquerda] + nums[direita];

            if (Math.abs(soma - target) < Math.abs(melhor - target)) {
                melhor = soma;
            }

            if (soma === target) {
                return soma;
            }

            if (soma < target) {
                esquerda++;
            } else {
                direita--;
            }
        }
    }

    return melhor;
}

function main() {
    console.log(threeSumClosest([-1, 2, 1, -4], 1))
}

main()
