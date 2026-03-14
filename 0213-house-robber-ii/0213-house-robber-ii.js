/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    if (nums.length === 1) return nums[0]

    function finding(arr) {

        let prev1 = 0
        let prev2 = 0;

        for (let i = 0; i < arr.length; i++) {

            let max = Math.max(prev1, prev2 + arr[i]);

            prev2 = prev1
            prev1 = max
        }

        return prev1
    }

    let case1 = finding(nums.slice(0, nums.length-1));
    let case2 = finding(nums.slice(1))

    return Math.max(case1, case2)
};