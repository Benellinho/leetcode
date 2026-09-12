var twoSum = function (nums, target) {
    let map = {};
    map[nums[0]] = 0
    for (let i = 1; i < nums.length; i++) {
        let remaning = target - nums[i]
        console.log(i, nums[i], remaning, map[remaning])
        if (map[remaning] !== undefined) {
            return [map[remaning], i]
        }
        map[nums[i]] = i
    }
};

function main() {
    console.log(twoSum([2, 7, 11, 15], 9))
}

main()