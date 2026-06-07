/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;

    k %= n

    for(let i = 0; i<Math.floor(n/2); i++){
        [nums[i],nums[n-1-i]] = [nums[n-1-i], nums[i]]
    }

    for(let i =0; i<Math.floor(k/2); i++){
        [nums[i], nums[k-1-i]] = [nums[k-1-i], nums[i]]
    }

    for(let i = 0; i<Math.floor((n-k)/2); i++){
        [nums[i+k], nums[n-1-i]] = [nums[n-1-i], nums[i+k]]
    }

    return nums
};