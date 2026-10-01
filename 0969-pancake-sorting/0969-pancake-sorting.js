/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
    const result = [];

    for (let size = arr.length; size > 1; size--) {
        let maxSize = 0;

        for (let i = 1; i < size; i++) {
            if (arr[maxSize] < arr[i]) maxSize = i;
        }

        if(maxSize === size -1) continue;

        if (maxSize !== 0) {
            reverse(arr, maxSize + 1);
            result.push(maxSize + 1)
        }

        reverse(arr, size);
        result.push(size)
    }

    return result
};

function reverse(arr, k) {
    let left = 0;
    let right = k - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++
        right--
    }
}