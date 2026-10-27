/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    let stack = [];
    let max = 0;

    for(let i = 0; i<nums.length; i++){
        if(stack.length === 0 || nums[i] < nums[stack[stack.length-1]]){
            stack.push(i);
        }
    }

    for(let j = nums.length -1; j>=0; j--){
        while(stack.length > 0 && nums[stack[stack.length-1]] <= nums[j]){
            let i = stack.pop() 

            max = Math.max(max, j- i)
        }
    }

    return max
};