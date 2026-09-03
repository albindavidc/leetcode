/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let mini = Infinity;

    function binarySearch(left, right) {
        if (left > right) return;

        let mid = Math.floor((left + right)/2);

        mini = Math.min(mini, nums[mid])

        if (nums[mid] < nums[right]) {
            binarySearch(left, mid - 1)
        } else {
            binarySearch(mid + 1, right)
        }
    }

    binarySearch(0, nums.length - 1);

    return mini;
};