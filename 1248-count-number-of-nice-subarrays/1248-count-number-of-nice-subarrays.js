/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {


    let map = new Map();
    let prefix = 0;
    let count = 0;

    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i] % 2;

        if (map.has(prefix - k)) {
            count += map.get(prefix - k);
        }

        map.set(prefix, (map.get(prefix) || 0) + 1)
    }

    return count;
};