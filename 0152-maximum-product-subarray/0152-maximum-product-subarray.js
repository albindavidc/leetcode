/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let max = nums[0];
    let min = nums[0];

    let result = nums[0];

    for(let i = 1; i<nums.length; i++){
        let curr = nums[i];

        let tempMax = Math.max(curr, curr*max, curr*min);
        let tempMin = Math.min(curr, curr*max, curr*min);

        max = tempMax;
        min = tempMin;

        result = Math.max(result, max);
    }

    return result
};