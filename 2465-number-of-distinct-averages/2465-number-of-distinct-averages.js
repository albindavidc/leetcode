/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {

    let result = new Set();

    while(nums.length >0) {
        let max = Math.max(...nums);
        let min = Math.min(...nums);

        let maxI = nums.indexOf(max);
        let minI = nums.indexOf(min);

        if (maxI > minI) {
            nums.splice(maxI, 1);
            nums.splice(minI, 1);
        } else {
            nums.splice(minI, 1);
            nums.splice(maxI, 1)
        }

        let avg = (max + min) / 2

        if (!result.has(avg)) {
            result.add(avg)
        }
    }

    return result.size
};