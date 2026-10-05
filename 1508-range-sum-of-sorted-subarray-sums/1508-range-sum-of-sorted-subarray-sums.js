/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            result.push(sum)
        }
    }

    result.sort((a,b) => a-b);

    let final = 0;
    for(let i = left -1; i <right; i++){
        final = (final + result[i]) % (10**9+7)
    }

    return final
};