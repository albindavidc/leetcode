/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
    let result = 0;
    
    let lastValid = -1;
    let start = 0;
    let i = 0;

    while (i < nums.length) {
        if (nums[i] > right){
            start = i + 1;
            lastValid = -1;
        }else if(nums[i] >= left){
            lastValid = i
        }

        if(lastValid !== -1){
            result += lastValid - start + 1
        }

        i++
    }

    return result
};