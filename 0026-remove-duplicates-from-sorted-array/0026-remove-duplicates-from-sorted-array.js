/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return null;
    
    let k = 1;

    for(let i = 1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[k] = nums[i];
            k++;
        }
    }

    return k
};