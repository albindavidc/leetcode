/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
    let arr = s.split('')

    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (arr[i] !== arr[j]) {
            if (arr[i] < arr[j]) {
                arr[j] = arr[i]
            } else {
                arr[i] = arr[j]
            }
        }
        i++
        j--
    }

    return arr.join('')
};