/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let result = Array(nums.length);

    let pos = 0;
    let neg = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result[pos] = nums[i]
            pos += 2;
        } else {
            result[neg] = nums[i]
            neg += 2;
        }
    }

    return result
};