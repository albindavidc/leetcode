/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums = nums.sort((a,b) => a-b)
    const n = nums.length

    return Math.max(nums[n-1]* nums[n-2]* nums[n-3], 
                    nums[0]* nums[1]* nums[n-1])
};