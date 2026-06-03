/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let store = new Map();
    let larger = 0;
    let largerCount = 0;

    for(let i = 0; i<nums.length; i++){
        if(store.set(nums[i], (store.get(nums[i]) || 0) + 1));

        if(largerCount < store.get(nums[i])){
            larger = nums[i];
            largerCount = store.get(nums[i])
        }
    }

    return larger
};