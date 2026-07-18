/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums = nums.sort((a,b) => a-b);

    let smallest = nums[0]
    let largest = nums[nums.length-1]

    let result = 1;

    for(let i = 1; i<=smallest; i++){
        if(smallest %i === 0 && largest %i ===0){
            result = i;
        }
    }

    return result
};