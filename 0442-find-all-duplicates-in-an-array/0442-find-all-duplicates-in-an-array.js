/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let mapping = new Map();

    for(let num of nums){
        mapping.set(num, (mapping.get(num) || 0) + 1)
    }

    let result = [];

    for(const [num, count] of mapping){
        if(mapping.get(num) >=2){
            result.push(num)
        }
    }

    return result
};