/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    let s1 = String.fromCharCode(...nums1);
    let s2 = String.fromCharCode(...nums2);

    function exists(len) {
        let arr1 = new Set();

        for (let i = 0; i <= s1.length - len; i++) {
            arr1.add(s1.slice(i, i + len))
        }

        for (let i = 0; i <= nums2.length - len; i++) {
            let arr2 = s2.slice(i, i + len)

            if (arr1.has(arr2)) {
                return true;
            }
        }

        return false;
    }

    let left = 1;
    let right = Math.min(nums1.length, nums2.length);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (exists(mid)) {
            left = mid + 1
        } else {
            right = mid - 1;
        }
    }

    return right
};