/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
    arr.sort((a,b) => a-b)
    let result = [];
    let n = arr.length

    let i = 0;
    let j = n - 1;
    let mid = arr[Math.floor((n - 1) / 2)]

    while (result.length < k) {
        let left = Math.abs(arr[i] - mid)
        let right = Math.abs(arr[j] - mid);

        if (left > right) {
            result.push(arr[i]);
            i++
        } else {
            result.push(arr[j]);
            j--
        }

    }

    return result
};