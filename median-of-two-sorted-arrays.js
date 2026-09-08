/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums = [...nums1, ...nums2].sort((a, b) => a - b)
    let total = nums.length
    if (total == 1) return nums[0]
    let i = (total / 2) - 1
    console.log(nums, total, i)
    console.log(i % 1 == 0.5)
    const mediana = i % 1 == 0.5 ? nums[i + 0.5] : (nums[i] + nums[i + 1]) / 2
    return mediana
};

function main() {
    let nums1 = [1, 2, 3, 4, 5]
    let nums2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    console.log(findMedianSortedArrays(nums1, nums2))
}

main()