/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = findPosition(nums, target, true);
    let right = findPosition(nums, target, false);

    return [left, right];
};

function findPosition(nums, target, findFirstIndex) {
    let result = -1;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            result = mid;
            if (findFirstIndex) {
                right = mid - 1;
            } else {
                left = mid + 1
            }
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return result
}








