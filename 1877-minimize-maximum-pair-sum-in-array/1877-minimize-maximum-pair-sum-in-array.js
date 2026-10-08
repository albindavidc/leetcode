/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a - b);

    let i = 0;
    let j = nums.length - 1;

    let max = 0

    while (i < j) {
        let pair = nums[i] + nums[j];
        max = Math.max(pair, max);

        i++;
        j--;
    }

    return max
};