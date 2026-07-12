/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let num = nums.sort((a, b) => a - b);

    let left = 0;

    let result = 0;

    for(let right = 1; right<nums.length; right++){
        while (nums[right] - nums[left] > 1) {
            left++
        } 
        
        if(nums[right] - nums[left] === 1) {
            result = Math.max(result, right-left +1)
        }
    }

    return result
};