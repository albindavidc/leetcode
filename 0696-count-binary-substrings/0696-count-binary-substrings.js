/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let prevGroup = 0
    let currGroup = 1;
    let count = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            currGroup++
        } else {
            count += Math.min(prevGroup, currGroup);
            prevGroup = currGroup;
            currGroup = 1
        }
    }

    count += Math.min(prevGroup, currGroup);
    return count
};