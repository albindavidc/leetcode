/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    let result = [];

    let keySel = nums.reduce((acc, curr, ind) => {
        if(curr === key) acc.push(ind);
        return acc;
    }, [])

    for(let i = 0; i<nums.length; i++){
        for(let ind of keySel){
            if(Math.abs(i - ind) <= k){
                result.push(i)
                break;
            }
        }
    }

    return result
};