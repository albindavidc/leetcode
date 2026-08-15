/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {

    function quickSort(arr) {
        if (arr.length < 2) return arr;

        let pivot = arr[arr.length - 1];
        let left = [];
        let right = []

        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }

        return [...quickSort(left), pivot, ...quickSort(right)]
    }

    let sorting = quickSort(nums)
    let results = []

    let maxResult = []

    for (let i = 0; i < sorting.length; i++) {
        results[i] = [sorting[i]]

        for (let j = 0; j < i; j++) {
            if (sorting[i] % sorting[j] === 0) {

                if (results[j].length + 1 > results[i].length) {
                    results[i] = [...results[j], sorting[i]]
                }

            }
        }

        if (results[i].length > maxResult.length) {
            maxResult = results[i]
        }
    }

    return maxResult
};