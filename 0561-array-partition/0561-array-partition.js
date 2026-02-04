/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((a,b) => a-b);

    let result = 0;

    for(let i = 0; i<nums.length; i+=2){
        result += nums[i]
    }

    return result
};