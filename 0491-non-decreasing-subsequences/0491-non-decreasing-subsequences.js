/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    let result = [];

    function backtrack(start, arr) {
        if (arr.length >= 2) {
            result.push([...arr])
        }

        let used = new Set();
        for (let i = start; i < nums.length; i++) {
            if (arr.length > 0 && nums[i] < arr[arr.length - 1]) continue;


            if (used.has(nums[i])) continue;

            used.add(nums[i])
            arr.push(nums[i]);

            backtrack(i+1, arr);
            arr.pop()
        }
    }

    backtrack(0, [])

    return result
};