/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {

    let left = 0;
    let right = 1;

    let answer = [0, 1];
    while (right - left > 1e-9) {
        let mid = (left + right) / 2;

        let count = 0;
        let numerator = 0;
        let denominator = 1;

        let j = 0;
        for (let i = 0; i < arr.length; i++) {

            while (j < arr.length && arr[i] / arr[j] > mid) {
                j++
            }

            if (j === arr.length) continue;
            count += arr.length - j

            if (arr[i] / arr[j] > numerator / denominator) {
                numerator = arr[i];
                denominator = arr[j]
            }


        }
        if (count < k) {
            left = mid
        } else {
            right = mid
            answer = [numerator, denominator]
        }
    }

    return answer
};