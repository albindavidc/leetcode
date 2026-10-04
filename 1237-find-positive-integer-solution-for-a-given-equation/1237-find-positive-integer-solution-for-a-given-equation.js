/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
    let result = [];

    let x = 1;
    let y = z;

    while (x <= 1000 && y >= 1) {
        const fn = customfunction.f(x, y);

        if (fn === z) {
            result.push([x, y]);

            x++;
            y--;
        } else if (fn < z) {
            x++
        } else {
            y--
        }
    }

    return result
};