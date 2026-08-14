/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {

    for (let i = 0; i < intervals.length; i++) {
        intervals[i].push(i)
    }

    function splitting(arr) {
        if (arr.length <= 1) return arr;
        let n = arr.length;
        let left = arr.slice(0, Math.floor(n / 2));
        let right = arr.slice(Math.floor(n / 2));

        return merging(splitting(left), splitting(right))
    }

    function merging(leftArr, rightArr) {
        let sorted = [];

        while (leftArr.length && rightArr.length) {
            if (leftArr[0][0] < rightArr[0][0]) {
                sorted.push(leftArr.shift())
            } else {
                sorted.push(rightArr.shift())
            }
        }

        return [...sorted, ...leftArr, ...rightArr]
    }

    let sorted = splitting(intervals)




    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid][0] >= target) {
                result = arr[mid][2]
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result
    }

    let finalResult = new Array(sorted.length-1);
    for (let num of sorted) {
        let index = num[2]
        let output = binarySearch(sorted, num[1])
        
        finalResult[index] = output
    }

    return finalResult

};