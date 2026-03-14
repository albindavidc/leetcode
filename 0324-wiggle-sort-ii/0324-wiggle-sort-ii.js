/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {

    nums.sort((a, b) => a - b);

    let n = Math.ceil(nums.length / 2)
    let small = nums.slice(0, n);
    let large = nums.slice(n);

    small = small.reverse();
    large = large.reverse();

    let result = []

    for (let i = 0; i < small.length; i++) {
        result.push(small[i]);
        result.push(large[i])
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i]
    }
    
    return nums
};