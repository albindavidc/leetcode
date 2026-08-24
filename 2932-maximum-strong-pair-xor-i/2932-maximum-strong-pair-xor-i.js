/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    let max = 0;
    
    for(let i = 0; i<nums.length; i++){
        for(let j = 0; j<nums.length; j++){
            let condi = Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])
            if(condi){
                const xorVal = nums[i] ^ nums[j]
                max = Math.max(max, xorVal);
            }
        }
    }

    return max
};