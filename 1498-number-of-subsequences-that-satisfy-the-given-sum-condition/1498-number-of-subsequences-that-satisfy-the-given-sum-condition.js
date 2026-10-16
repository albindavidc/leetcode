/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
    let mod = 1_000_000_007;
    nums = nums.sort((a, b) => a - b)
    let result = 0;
    let left = 0;
    let right = nums.length - 1;

    let pow2 = Array(nums.length);
    pow2[0] = 1

    for (let i = 1; i < pow2.length; i++) {
        pow2[i] = (pow2[i - 1] * 2) % mod
    }

    while (left <= right) {

        if (nums[left] + nums[right] > target) {
            right--
            continue;
        }

        const count = pow2[right - left];
        result = (result + count) % mod

        left++
    }

    return result
};