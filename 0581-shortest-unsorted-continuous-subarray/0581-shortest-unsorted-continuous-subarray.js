/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    
    let left = -1, right = -1;
    let max = -Infinity, min = Infinity

    for(let i = 0; i<nums.length; i++){
        if(nums[i] < max){
            right = i
        }else{
            max = nums[i]
        }
    }

    for(let i = nums.length -1; i >= 0; i--){
        if(nums[i] > min){
            left = i
        }else{
            min = nums[i]
        }
    }


    return right === -1 ? 0 : right - left +1
};