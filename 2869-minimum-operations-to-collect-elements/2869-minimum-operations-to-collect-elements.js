/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let set = new Set();
    let count = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        count++;

        if (nums[i] <= k) {
            set.add(nums[i]);
        }

        if (set.size === k) {
            return count;
        }
    }
};