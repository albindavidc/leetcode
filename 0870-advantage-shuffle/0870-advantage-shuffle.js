/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b);
    let srtNums2 = nums2.map((value, index) => ({ value, index })).sort((a, b) => a.value - b.value)

    let result = Array(nums2.length);
    let left = 0;
    let right = nums1.length - 1

    for (let i = nums2.length - 1; i >= 0; i--) {
        let { value, index } = srtNums2[i];

        if (nums1[right] > value) {
            result[index] = nums1[right];
            right--
        } else {
            result[index] = nums1[left];
            left++
        }
    }

    return result;
};