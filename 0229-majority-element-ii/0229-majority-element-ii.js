/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let count = 1;

    nums = nums.sort((a, b) => a - b)

    let result = []

    for (let i = 1; i <= nums.length; i++) {
        if (i < nums.length && nums[i - 1] === nums[i]) {
            count++;
        } else {
            if (count > Math.floor(nums.length / 3)) {
                result.push(nums[i - 1])
            }
            count = 1
        }

    }

    return result
};