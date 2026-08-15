/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        let nextGreater = null;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > curr) {
                nextGreater = nums[j]
                break;
            }

        }

        if (nextGreater === null) {
            let j = 0;

            while (j < i) {
                if (nums[j] > curr) {
                    nextGreater = nums[j]
                    break;
                }
                j++
            }
        }

        if(nextGreater === null) nextGreater = -1

        result.push(nextGreater)
    }

    return result;
};