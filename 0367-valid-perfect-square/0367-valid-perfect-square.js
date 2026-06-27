/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num < 0) return false;
    if (num === 0 || num === 1) return true;

    let left = 0;
    let right = num;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let sqr = mid * mid

        if (sqr === num) {
            return true;
        }

        if (sqr < num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return false;
};