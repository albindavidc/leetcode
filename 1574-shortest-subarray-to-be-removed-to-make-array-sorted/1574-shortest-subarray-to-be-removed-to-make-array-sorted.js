/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
    let i = 0;
    while (i <= arr.length - 1 && arr[i] <= arr[i + 1]) {
        i++
    }

    if (i === arr.length - 1) return 0;

    let j = arr.length - 1
    while (j >= 0 && arr[j] >= arr[j - 1]) {
        j--
    }

    let result = Math.min(arr.length-1 -i, j);

    let left = 0;
    let right = j;
    while(left <= i && right < arr.length){
        if(arr[left] <= arr[right]){
            result = Math.min(result, right - left - 1)
            left++
        }else{
            right++
        }
    }

    return result
};