/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if(k < 0) return 0;

    nums.sort((a,b) => a-b);

    let left = 0;
    let right = 1;
    let count = 0;

    while(right < nums.length){
        if(left === right || nums[right] - nums[left] < k){
            right++
        }else if(nums[right] - nums[left] > k){
            left++
            if(left === right) right++
        }else{
            count++
            left++
            while(left < nums.length && nums[left] === nums[left-1]){
                left++
            }
        }
    }

    return count
};