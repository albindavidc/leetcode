/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    nums = nums.sort((a,b) => b-a);
    let result = [];

    for(let i = 0; i<nums.length; i++){
        if(result.length === k){
            break
        }
        if(!result.includes(nums[i])){
            result.push(nums[i])
        }
    }

    return result
};