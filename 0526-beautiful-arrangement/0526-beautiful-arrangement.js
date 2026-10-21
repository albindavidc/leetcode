/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
    let count = 0;

    function backtrack(arr, num) {
        if (arr.length === n) {
            count++
            return
        }

        if (num > n) return;

        let position = arr.length + 1

        if (!arr.includes(num) && (num % position === 0 || position % num === 0)) {
            arr.push(num);
            backtrack(arr, 1);
            arr.pop()
        }

        backtrack(arr, num + 1)

    }

    backtrack([], 1)

    return count;
};