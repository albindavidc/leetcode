/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    return s.split('').slice(0,k).reverse().join('') + s.slice(k)
};