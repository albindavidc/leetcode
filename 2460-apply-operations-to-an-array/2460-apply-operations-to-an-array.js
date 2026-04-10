/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            result.push(nums[i] * 2);
            i++
        } else {
            result.push(nums[i])
        }

    }

    let final = result.filter(num => num !== 0)

    while (final.length < nums.length) {
        final.push(0)
    }

    return final
};