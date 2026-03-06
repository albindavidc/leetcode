/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b)
    let result = [];
    let cd = Infinity;


    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1];
        if (diff < cd) {
            result = [[arr[i - 1], arr[i]]]
            cd = diff
        } else if (diff === cd) {
            result.push([arr[i - 1], arr[i]])
        }

    }


    return result
};